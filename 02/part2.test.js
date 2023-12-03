import { expect, test } from "vitest";
import { getPowerOfSet } from "./part2";

test("getPowerOfSet", () => {
  expect(
    getPowerOfSet("Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green")
  ).toBe(48);
});
