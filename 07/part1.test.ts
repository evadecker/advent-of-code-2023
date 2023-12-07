import { expect, test } from "vitest";
import { input, example } from "./input";
import { getHandType, getStrongerHand, solve } from "./part1";

test("getHandType", () => {
	expect(getHandType("AAAAA")).toEqual("five of a kind");
	expect(getHandType("AA8AA")).toEqual("four of a kind");
	expect(getHandType("23332")).toEqual("full house");
	expect(getHandType("TTT98")).toEqual("three of a kind");
	expect(getHandType("23432")).toEqual("two pair");
	expect(getHandType("A23A4")).toEqual("one pair");
	expect(getHandType("23456")).toEqual("high card");
});

test("getStrongerHand", () => {
	expect(getStrongerHand("33332", "2AAAA")).toEqual(1);
	expect(getStrongerHand("77888", "77788")).toEqual(1);
});

test("solve", () => {
	expect(solve(example)).toEqual(6440);
	expect(solve(input)).toEqual(250946742);
});
