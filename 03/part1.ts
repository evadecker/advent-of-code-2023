import { input } from "./input";

export function solve(input: string) {
	// Create a 2D array from input
	const lines = input.split("\n").map((line) => line.split(""));

	// An array of all numbers with adjacent symbols
	let validNumbers: number[] = [];

	// Iterate over each line
	for (let i = 0; i < lines.length; i++) {
		// Iterate over each character
		for (let j = 0; j < lines[i].length; j++) {
			// If a character is an integer, run some tests
			if (lines[i][j].match(/\d/)) {
				let adjacentCells: string[] = [];
				let hasAdjacentSymbol = false;
				let currentNumberAsString = "";

				while (j < lines[i].length && lines[i][j].match(/\d/)) {
					currentNumberAsString += lines[i][j];

					// Compile an array of adjacent symbols
					if (i > 0) {
						adjacentCells.push(lines[i - 1][j]); // N
						if (j > 0) adjacentCells.push(lines[i - 1][j - 1]); // NW
						if (j < lines[i].length) adjacentCells.push(lines[i - 1][j + 1]); // NE
					}

					if (i < lines.length - 1) {
						adjacentCells.push(lines[i + 1][j]); // S
						if (j > 0) adjacentCells.push(lines[i + 1][j - 1]); // SW
						if (j < lines[i].length) adjacentCells.push(lines[i + 1][j + 1]); // SE
					}

					if (j > 0) adjacentCells.push(lines[i][j - 1]); // W
					if (j < lines[i].length) adjacentCells.push(lines[i][j + 1]); // E

					j++;
				}

				// If any adjacent cells contains something other than a digit or period, there's a symbol
				hasAdjacentSymbol = adjacentCells.some(
					(cell) => cell && !cell.match(/\d|\./),
				);

				if (hasAdjacentSymbol)
					validNumbers.push(parseInt(currentNumberAsString));
			}
		}
	}

	let sum = 0;

	for (const number of validNumbers) sum += number;

	return sum;
}
