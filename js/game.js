class Game {
	player1Option = '';
	player2Option = '';
	winner = 0;

	constructor(player1Option, player2Option, winner) {
		this.player1Option = player1Option;
		this.player2Option = player2Option;
		this.winner = winner;
	}

	getComputerOption = () => {
		const options = ['rock', 'paper', 'scissors'];
		const randomNumber = Math.floor(Math.random() * 3);
		return options[randomNumber];
	};

	setPlayer1Option = option => {
		this.player1Option = option;
		return;
	};

	setWinner = () => {
		//empate?
		const player1Option = this.player1Option;
		let player2Option = this.getComputerOption();

		while (player1Option === player2Option) {
			player2Option = this.getComputerOption();
		}
		this.player2Option = player2Option;
		// Comprobamos las condiciones para el jugador 1 ganar
		if (
			(player1Option === 'rock' && player2Option === 'scissors') ||
			(player1Option === 'paper' && player2Option === 'rock') ||
			(player1Option === 'scissors' && player2Option === 'paper')
		) {
			game.winner = 1;
			return;
		}

		// Si no hay empate ni ganador del jugador 1, el jugador 2 es el ganador
		game.winner = 2;
	};
}

export const game = new Game('', '', 0);
