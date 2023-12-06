type Card = {
	cardNumber: number;
	winningNumbers: number[];
	numbersYouHave: number[];
};

export const solve = (input: string): number => {
	const lines = input.split("\n");

	const cards: Card[] = lines.map((line) => {
		const cardNumber = parseInt(line.split(":")[0].split(/\s+/)[1]);
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

		return {
			cardNumber,
			winningNumbers,
			numbersYouHave,
		};
	});

	let cardCopies: number[] = [];
	let totalCardCount = 0;

	for (const card of cards) {
		// Add the original card to the count
		totalCardCount++;

		const { cardNumber, winningNumbers, numbersYouHave } = card;

		const matchCount = numbersYouHave.filter((n) =>
			winningNumbers.includes(n),
		).length;

		// Maintain an array of card copies
		for (let i = 1; i <= matchCount; i++) {
			cardCopies.push(cardNumber + i);
		}

		// For each copy of the current card, generate new copies for the winning count
		const thisCardCopies = cardCopies.filter((n) => n === cardNumber).length;
		for (let i = 1; i <= thisCardCopies; i++) {
			for (let j = 1; j <= matchCount; j++) {
				cardCopies.push(cardNumber + j);
			}
		}

		// Add all copies of the current card to the total count
		if (thisCardCopies) totalCardCount += thisCardCopies;
	}

	return totalCardCount;
};
