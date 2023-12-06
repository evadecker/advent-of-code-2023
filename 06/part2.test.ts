import { expect, test } from "vitest";
import { input, example } from "./input";
import { solve } from "./part2";

test("solve", () => {
	expect(solve(example)).toEqual(71503);
	expect(solve(input)).toEqual(40087680);
});
