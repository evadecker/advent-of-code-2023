// "Card 1: 41 48 83 86 17 | 83 86  6 31 17  9 48 53"
export const getPointTotalForCard = (line: string): number => {
	const winningNumbers = line
		.split("|")[0]
		.split(":")[1]
		.trim()
		.split(/\s+/)
		.map((n) => parseInt(n));

	const numbersYouHave = line
		.split("|")[1]
		.trim()
		.split(/\s+/)
		.map((n) => parseInt(n));

	const winningMatches = numbersYouHave.filter((n) =>
		winningNumbers.includes(n),
	);

	if (winningMatches.length === 0) return 0;
	if (winningMatches.length === 1) return 1;
	return 2 ** (winningMatches.length - 1);
};

export const solve = (input: string) => {
	const lines = input.split("\n");
	let sum = 0;

	for (const line of lines) {
		sum += getPointTotalForCard(line);
	}

	return sum;
};
