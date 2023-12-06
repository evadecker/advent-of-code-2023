import { expect, test } from "vitest";
import { input, example } from "./input";
import { getPointTotalForCard, solve } from "./part1";

test("getPointTotalForCard", () => {
	expect(
		getPointTotalForCard("Card 1: 41 48 83 86 17 | 83 86  6 31 17  9 48 53"),
	).toEqual(8);
});

test("solve", () => {
	expect(solve(example)).toEqual(13);
	expect(solve(input)).toEqual(24160);
});
