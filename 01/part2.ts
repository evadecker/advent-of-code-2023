import * as fs from "fs";
const input = fs.readFileSync("./input.txt", "utf-8");

function textToNumber(text: string): number {
	switch (text) {
		case "one":
			return 1;
		case "two":
			return 2;
		case "three":
			return 3;
		case "four":
			return 4;
		case "five":
			return 5;
		case "six":
			return 6;
		case "seven":
			return 7;
		case "eight":
			return 8;
		case "nine":
			return 9;
		default:
			return parseInt(text);
	}
}

function getMatches(line: string): string[] {
	// "eighthree" -> ["eight", "three"]
	// https://mtsknn.fi/blog/how-to-do-overlapping-matches-with-regular-expressions/
	return Array.from(
		line.matchAll(/(?=(one|two|three|four|five|six|seven|eight|nine|\d))/g),
		(match) => match[1],
	);
}

function getFirstDigit(line: string): number {
	const matches = getMatches(line);
	if (matches) return textToNumber(matches[0]);
	return 0;
}

function getLastDigit(line: string): number {
	const matches = getMatches(line);
	if (matches) return textToNumber(matches[matches.length - 1]);
	return 0;
}

function getCalibrationValueFromLine(line: string): number {
	const calibrationValue = parseInt(
		`${getFirstDigit(line)}${getLastDigit(line)}`,
	);

	if (!Number.isNaN(calibrationValue)) return calibrationValue;
	return 0;
}

function solve(document: string) {
	let value = 0;
	const lines = document.split("\n");
	for (const line of lines) value += getCalibrationValueFromLine(line);
	return value;
}

console.log(solve(input.trim()));
