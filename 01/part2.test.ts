import { expect, test } from "vitest";
import { solve } from "./part2";
import { input } from "./input";

test("solve", () => {
	expect(solve(input)).toBe(55902);
});
