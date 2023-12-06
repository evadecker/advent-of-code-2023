import { expect, test } from "vitest";
import { input, example } from "./input";
import { calculateDistance, solve } from "./part1";

test("calculateDistance", () => {
	expect(calculateDistance(0, 7)).toEqual(0);
	expect(calculateDistance(2, 7)).toEqual(10);
	expect(calculateDistance(3, 7)).toEqual(12);
});

test("solve", () => {
	expect(solve(example)).toEqual(288);
	expect(solve(input)).toEqual(1731600);
});
