export const getWinner = (player1Option, player2Option) => {
	//empate?
	if (player1Option === player2Option) {
		return 0;
	}

	// Comprobamos las condiciones para el jugador 1 ganar
	if (
		(player1Option === 'piedra' && player2Option === 'tijeras') ||
		(player1Option === 'papel' && player2Option === 'piedra') ||
		(player1Option === 'tijeras' && player2Option === 'papel')
	) {
		return '1';
	}

	// Si no hay empate ni ganador del jugador 1, el jugador 2 es el ganador
	return 2;
};

const getComputerOption = () => {
	const options = ['rock', 'paper', 'scissors'];
	const randomNumber = Math.floor(Math.random() * 3);
	return options[randomNumber];
};
