import { input } from "./input";

const MAX_RED = 12;
const MAX_GREEN = 13;
const MAX_BLUE = 14;

type Color = "red" | "green" | "blue";

type GamePull = Record<Color, number>;

export function getGameNumberFromString(line: string): number {
	return parseInt(line.split(": ")[0].split(" ")[1]);
}

// Given a string like "8 green, 13 red, 1 blue" return a structured GamePull object
// { 'red': 13, 'green': 8, 'blue': 1 }
export function getValuesFromPullString(pullString: string): GamePull {
	let gamePull: GamePull = {
		red: 0,
		green: 0,
		blue: 0,
	};

	const blockColorAndCounts = pullString.split(", ");

	for (const blockColorAndCount of blockColorAndCounts) {
		const count = parseInt(blockColorAndCount.split(" ")[0]);
		const color = blockColorAndCount.split(" ")[1] as Color;

		gamePull[color] = count;
	}

	return gamePull;
}

// Given a game line like "Game 3: 5 red, 9 blue, 1 green; 5 red; 11 red, 2 green, 8 blue; 2 green, 6 blue"
// return an arrray of GamePull[] objects like [ { 'red': 5, 'green': 1, 'blue': 9 }, { 'red': 5 ... }, ... ]
export function getPullsFromGameLine(line: string): GamePull[] {
	let gamePulls: GamePull[] = [];

	// Remove "Game 1: " and then split the remainder of the line by semicolon
	const pullStrings = line.split(": ")[1].split("; ");

	for (const pullString of pullStrings) {
		gamePulls.push(getValuesFromPullString(pullString));
	}

	return gamePulls;
}

// Given a game line like "Game 3: 5 red, 9 blue, 1 green; 5 red; 11 red, 2 green, 8 blue; 2 green, 6 blue"
// return a single GamePull with the maximum value for each color ({ red: 11, blue: 9, green: 2 })
export function getMaxValuesForGame(line: string): GamePull {
	const gameNumber = parseInt(line.split(": ")[0].split(" ")[1]);

	let maxValues: GamePull = {
		red: 0,
		green: 0,
		blue: 0,
	};

	for (const gamePull of getPullsFromGameLine(line)) {
		const existingValues = maxValues;

		maxValues = {
			red:
				existingValues.red < gamePull.red ? gamePull.red : existingValues.red,
			green:
				existingValues.green < gamePull.green
					? gamePull.green
					: existingValues.green,
			blue:
				existingValues.blue < gamePull.blue
					? gamePull.blue
					: existingValues.blue,
		};
	}

	return maxValues;
}

export function isGamePossible(line: string): boolean {
	const maxValues = getMaxValuesForGame(line);

	if (maxValues.red > MAX_RED) return false;
	if (maxValues.green > MAX_GREEN) return false;
	if (maxValues.blue > MAX_BLUE) return false;

	return true;
}

export function solve(input: string) {
	let value = 0;
	const lines = input.split("\n");
	for (const line of lines) {
		const gameNumber = getGameNumberFromString(line);
		const isPossible = isGamePossible(line);
		if (isPossible) value += gameNumber;
	}
	return value;
}

console.log(solve(input));
