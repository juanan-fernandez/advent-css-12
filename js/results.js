console.log(window);
function viewWinner() {
	if (window.location.hash === '#results') {
		console.log('viewWinner');
	}
}