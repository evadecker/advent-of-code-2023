import { input } from "./input";
import { getMaxValuesForGame } from "./part1";

// Given a game line like "Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green"
// finds the maximum values of that line and then multiplies them together
export function getPowerOfSet(line: string): number {
	const maxValues = getMaxValuesForGame(line);
	return maxValues.red * maxValues.green * maxValues.blue;
}

export function solve(input: string): number {
	let value = 0;
	const lines = input.split("\n");
	for (const line of lines) {
		value += getPowerOfSet(line);
	}
	return value;
}
