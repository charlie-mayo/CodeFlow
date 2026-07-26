import { test, expect } from "vitest";
import { buildList, renderList, markDone, replacePending } from "./list";


test("buildList, given 3 lines of text:", () => {
  expect(buildList(["Book haircut", "Walk Archie", "Cook dinner"])).toEqual([
    { text: "Book haircut", done: false },
    { text: "Walk Archie", done: false },
    { text: "Cook dinner", done: false },
  ]);
});


test("buildList, given no text (lines=[]):", () => {
  expect(buildList([])).toEqual([]);  // given an empty array,
});                                   // it should return an empty array.


test(`buildList, given the empty string (lines=[""]):`, () => {
  expect(buildList([""])).toEqual([
    { text: "", done: false },
  ]);
});


test("renderList, given a mix of done/not done tasks:", () => {
  let testList = buildList(["Book haircut", "Walk Archie", "Cook dinner"]);
  testList = markDone(testList, [1, 3]);
  expect(renderList(testList)).toBe(`1. [x] Book haircut
2. [ ] Walk Archie
3. [x] Cook dinner`);
});


test("markDone, basic test:", () => {
  let testList = buildList(["Book haircut", "Walk Archie"]);
  testList = markDone(testList, [1]);
  expect(testList).toEqual([
    { text: "Book haircut", done: true },
    { text: "Walk Archie", done: false },
  ]);
});


test("markDone, given a number not on the list:", () => {
  let testList = buildList(["Book haircut", "Walk Archie"]);
  testList = markDone(testList, [5]);
  expect(testList).toEqual([
    { text: "Book haircut", done: false },
    { text: "Walk Archie", done: false },
  ]);
});


test("markDone, immutability check:", () => {
  const original = buildList(["a", "b"]);
  markDone(original, [1]);
  expect(original).toEqual([
    { text: "a", done: false },
    { text: "b", done: false },
  ]);
});


test("replacePending, basic test:", () => {
  let testList = buildList(["Book haircut", "Walk Archie", "Cook dinner"]);
  testList = markDone(testList, [2]);
  expect(replacePending(testList, ["Chop veggies", "Season chicken"])).toEqual([
    { text: "Walk Archie", done: true },
    { text: "Chop veggies", done: false },
    { text: "Season chicken", done: false },
  ]);
});
