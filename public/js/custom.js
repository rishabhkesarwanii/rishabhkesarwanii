const gistAdjust = () => {
	document.querySelectorAll('.gist').forEach(gistClassElement => {
		var contentBody = gistClassElement.parentNode;
		if (postScriptTag = contentBody.querySelector('script')) postScriptTag.remove();
		if (postLinkTag = contentBody.querySelector('link')) postLinkTag.remove();
		var wordsCount = 0;
		gistClassElement.querySelectorAll('article').forEach(postArticleTag => {
			postArticleTag.childNodes.forEach((node) => {
				node.querySelectorAll('a.anchor').forEach(anchorLink => {
					anchorLink.remove();
				});
				wordsCount += node.innerHTML.split(' ').length;
				contentBody.appendChild(node);
			});
		})
		if (contentBody.querySelector('.rt-label')) {
			var minutes = Math.ceil(wordsCount / 200);
			contentBody.querySelector('.rt-time').innerHTML = minutes < 2 ? '< ' + minutes : minutes
			contentBody.querySelector('.rt-postfix').innerHTML = minutes < 2 ? 'minute' : 'minutes'
		}
		gistClassElement.remove();
	})
};

const attachOnlicks = () => {
	document.querySelectorAll('a').forEach((link) => {
		if (!link.getAttribute('href').startsWith('/')) {
			link.setAttribute('target', '_blank');
		}
	});
	window.onpopstate = (event) => {
		loadURL(event.target.document.location.pathname, true);
	};
};
