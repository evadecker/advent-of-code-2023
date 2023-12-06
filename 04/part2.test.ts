import { expect, test } from "vitest";
import { input, example } from "./input";
import { solve } from "./part2";

test("solve", () => {
	expect(solve(example)).toEqual(30);
	expect(solve(input)).toEqual(5659035);
});
