import { expect, test } from "vitest";
import { getPowerOfSet, solve } from "./part2";
import { input } from "./input";

test("getPowerOfSet", () => {
	expect(
		getPowerOfSet("Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green"),
	).toBe(48);
});

test("solve", () => {
	expect(solve(input)).toBe(72513);
});
