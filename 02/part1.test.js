import { expect, test } from "vitest";
import {
  getGameNumberFromString,
  getPullsFromGameLine,
  getValuesFromPullString,
  getMaxValuesForGame,
  solve,
} from "./part1";

test("getGameNumberFromString", () => {
  expect(
    getGameNumberFromString(
      "Game 3: 5 red, 9 blue, 1 green; 5 red; 11 red, 2 green, 8 blue; 2 green, 6 blue"
    )
  ).toBe(3);
});

test("getValuesFromPullString", () => {
  expect(getValuesFromPullString("3 blue, 7 green, 10 red")).toEqual({
    red: 10,
    green: 7,
    blue: 3,
  });

  expect(getValuesFromPullString("8 blue, 6 red")).toEqual({
    red: 6,
    green: 0,
    blue: 8,
  });
});

test("getPullsFromGameLine", () => {
  expect(
    getPullsFromGameLine(
      "Game 3: 5 red, 9 blue, 1 green; 5 red; 11 red, 2 green, 8 blue; 2 green, 6 blue"
    )
  ).toEqual([
    {
      red: 5,
      green: 1,
      blue: 9,
    },
    {
      red: 5,
      green: 0,
      blue: 0,
    },
    {
      red: 11,
      green: 2,
      blue: 8,
    },
    {
      red: 0,
      green: 2,
      blue: 6,
    },
  ]);
});

test("getMaxValuesForGame", () => {
  expect(
    getMaxValuesForGame(
      "Game 3: 5 red, 9 blue, 1 green; 5 red; 11 red, 2 green, 8 blue; 2 green, 6 blue"
    )
  ).toEqual({
    red: 11,
    green: 2,
    blue: 9,
  });
});

test("solve", () => {
  expect(
    solve(`Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green
Game 2: 1 blue, 2 green; 3 green, 4 blue, 1 red; 1 green, 1 blue
Game 3: 8 green, 6 blue, 20 red; 5 blue, 4 red, 13 green; 5 green, 1 red
Game 4: 1 green, 3 red, 6 blue; 3 green, 6 red; 3 green, 15 blue, 14 red
Game 5: 6 red, 1 blue, 3 green; 2 blue, 1 red, 2 green`)
  ).toBe(8);
});
