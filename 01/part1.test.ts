import { expect, test } from "vitest";
import { solve } from "./part1";
import { input } from "./input";

test("solve", () => {
	expect(solve(input)).toBe(56465);
});
