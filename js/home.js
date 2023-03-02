import * as game from './game.js';

const dom = {
	options: 'dddd',
};

function getWinner() {
	for (let i = 0; i < dom.options.length; i++) {
		dom.options[i].classList.remove('options__item--selected');
	}
	this.classList.add('options__item--selected');
	const paragraph = this.getElementsByClassName('election')[0];
	game.setPlayer1Option(paragraph.textContent);
	game.setWinner();
	console.log(game.game);
}

function main() {
	console.log(window.location.hash);

	const options = document.getElementsByClassName('options__item');
	console.log(options.length);
	for (let i = 0; i < options.length; i++) {
		options[i].addEventListener('click', getWinner);
	}
}

window.addEventListener('hashchange', main);
