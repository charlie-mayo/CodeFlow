import { test } from "vitest";
import { buildList, renderList, markDone, replacePending } from "./list";


let testList = buildList(["book haircut", "walk Archie", "cook dinner"]);
console.log("Before marking:\n" + renderList(testList) + "\n");

testList = markDone(testList, [1, 2]);
console.log("After marking:\n" + renderList(testList) + "\n");

testList = replacePending(testList, ["shave"]);
console.log("After replacing pends:\n" + renderList(testList));
