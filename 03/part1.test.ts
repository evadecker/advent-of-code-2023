import { expect, test } from "vitest";
import { input } from "./input";
import { solve } from "./part1";

test("solve", () => {
	expect(solve(input)).toEqual(525911);
});
