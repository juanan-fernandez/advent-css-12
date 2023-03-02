import * as game from './game.js';

const dom = {
	options: document.getElementsByClassName('options__item'),
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
	for (let i = 0; i < dom.options.length; i++) {
		dom.options[i].addEventListener('click', getWinner);
	}
}

window.addEventListener('load', main);
