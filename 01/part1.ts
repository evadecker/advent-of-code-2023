import { input } from "./input";

function getCalibrationValueFromLine(line: string): number {
	function getFirstDigit(line: string): number {
		const chars = line.split("");
		for (const char of chars) {
			if (char.match(/\d/)) return parseInt(char);
		}
		return 0;
	}

	function getLastDigit(line: string): number {
		const chars = line.split("").reverse();
		for (const char of chars) {
			if (char.match(/\d/)) return parseInt(char);
		}
		return 0;
	}

	const calibrationValue = parseInt(
		`${getFirstDigit(line)}${getLastDigit(line)}`,
	);
	return calibrationValue;
}

export function solve(document: string) {
	let value = 0;
	const lines = document.split("\n");
	for (const line of lines) value += getCalibrationValueFromLine(line);
	return value;
}
