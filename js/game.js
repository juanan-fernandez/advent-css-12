export const game = {
	player1Option: '',
	player2Option: '',
	winner: 0,
};

const getComputerOption = () => {
	const options = ['rock', 'paper', 'scissors'];
	const randomNumber = Math.floor(Math.random() * 3);
	return options[randomNumber];
};

export const setWinner = () => {
	//empate?
	const player1Option = game.player1Option;
	game.player2Option = getComputerOption();
	const player2Option = game.player2Option;

	if (player1Option === player2Option) {
		game.winner = 0;
	}

	// Comprobamos las condiciones para el jugador 1 ganar
	if (
		(player1Option === 'rock' && player2Option === 'scissors') ||
		(player1Option === 'paper' && player2Option === 'rock') ||
		(player1Option === 'scissors' && player2Option === 'paper')
	) {
		game.winner = 1;
	}

	// Si no hay empate ni ganador del jugador 1, el jugador 2 es el ganador
	game.winner = 2;
};

export const setPlayer1Option = option => {
	game.player1Option = option;
	return;
};
