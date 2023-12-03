import { input } from "./input";

export function solve(input: string) {
	// Create a 2D array from input
	const lines = input.split("\n").map((line) => line.split(""));

	// An array of all numbers adjacent to an asterisk
	let validNumbers: {
		number: number;
		asteriskPosition: [number, number];
	}[] = [];

	for (let i = 0; i < lines.length; i++) {
		for (let j = 0; j < lines[i].length; j++) {
			// If a character is an integer, run some tests
			if (lines[i][j].match(/\d/)) {
				let adjacentAsteriskPos: null | [number, number] = null;
				let currentNumberAsString = "";

				while (j < lines[i].length && lines[i][j].match(/\d/)) {
					currentNumberAsString += lines[i][j];

					// Check for asterisks
					if (i > 0) {
						if (lines[i - 1][j]?.match(/\*/)) adjacentAsteriskPos = [i - 1, j]; // N
						if (j > 0 && lines[i - 1][j - 1]?.match(/\*/))
							adjacentAsteriskPos = [i - 1, j - 1]; // NW
						if (j < lines[i].length && lines[i - 1][j + 1]?.match(/\*/))
							adjacentAsteriskPos = [i - 1, j + 1]; // NE
					}

					if (i < lines.length - 1) {
						if (lines[i + 1][j]?.match(/\*/)) adjacentAsteriskPos = [i + 1, j]; // S
						if (j > 0 && lines[i + 1][j - 1]?.match(/\*/))
							adjacentAsteriskPos = [i + 1, j - 1]; // SW
						if (j < lines[i].length && lines[i + 1][j + 1]?.match(/\*/))
							adjacentAsteriskPos = [i + 1, j + 1]; // SE
					}

					if (j > 0 && lines[i][j - 1]?.match(/\*/))
						adjacentAsteriskPos = [i, j - 1]; // W
					if (j < lines[i].length && lines[i][j + 1]?.match(/\*/))
						adjacentAsteriskPos = [i, j + 1]; // E

					j++;
				}

				if (adjacentAsteriskPos !== null)
					validNumbers.push({
						number: parseInt(currentNumberAsString),
						asteriskPosition: adjacentAsteriskPos,
					});
			}
		}
	}

	let usedAsterisks: [number, number][] = [];
	let sum = 0;

	for (const validNumber of validNumbers) {
		const match = validNumbers.find(
			(el) =>
				!usedAsterisks.includes(el.asteriskPosition) &&
				JSON.stringify(el.asteriskPosition) ===
					JSON.stringify(validNumber.asteriskPosition) &&
				el.number !== validNumber.number,
		);

		if (match) {
			const gearRatio = validNumber.number * match.number;
			sum += gearRatio;
		}

		// Push the used asterisk to prevent re-running the same calculation for the matched valid number
		usedAsterisks.push(validNumber.asteriskPosition);
	}

	return sum;
}
