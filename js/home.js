import { game } from './game.js';

const dom = {
	options: document.getElementsByClassName('options__item'),
	rock: '',
};

function getWinner() {
	for (let i = 0; i < dom.options.length; i++) {
		dom.options[i].classList.remove('options__item--selected');
	}
	this.classList.add('options__item--selected');
	const paragraph = this.getElementsByClassName('election')[0];
	game.setPlayer1Option(paragraph.textContent);
	game.setWinner();
	const viewWinner = document.getElementById('linkWinner');
	console.log(viewWinner);
	viewWinner.href = `/pages/results.html?w=${game.winner}&p1=${game.player1Option}&p2=${game.player2Option}`;
}

function main() {
	if (window.location.pathname.indexOf('index') >= 0) {
		for (let i = 0; i < dom.options.length; i++) {
			dom.options[i].addEventListener('click', getWinner);
		}
	}
	if (window.location.pathname.indexOf('results') >= 0) {
		const params = new URLSearchParams(window.location.search);

		const winner = params.get('w');
		const player1Option = params.get('p1');
		const player2Option = params.get('p2');
		console.log(winner, player1Option, player2Option);
		const image1 = `/images/${player1Option}.png`;
		const image2 = `/images/${player2Option}.png`;
		//player1
		const player1 = document.getElementById('player1');
		player1.getElementsByClassName('imagen')[0].src = image1;
		//computer
		const player2 = document.getElementById('player2');
		player2.getElementsByClassName('imagen')[0].src = image2;
		//winner
		const playerWinner = document.getElementById('player' + winner);
		const title = playerWinner.getElementsByClassName('results__item__p')[0];
		title.classList.remove('results__item__p--hidden');
		const result = document.getElementById('result');
		result.classList.add(winner === '1' ? 'results__youwin' : 'results__computerwins');
	}
}

document.addEventListener('DOMContentLoaded', main);
