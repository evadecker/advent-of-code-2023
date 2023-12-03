import { expect, test } from "vitest";
import { input } from "./input";
import { solve } from "./part2";

test("solve", () => {
	expect(solve(input)).toEqual(75805607);
});
