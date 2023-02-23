'use strict';

(function () {
	function init() {
		var router = new Router([
			new Route('home', 'home.html', true),
			new Route('results', 'results.html'),
		]);
	}
	init();
})();
