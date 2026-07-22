import { test, expect } from "vitest";
import { format } from "./stopwatch";

test("formats zero as 00:00:00", () => {
  expect(format(0)).toBe("00:00:00");
});

test("formats 59999 (just under a minute) as 00:00:59", () => {
  expect(format(59999)).toBe("00:00:59");
});

test("formats 60000 as 00:01:00", () => {
  expect(format(60000)).toBe("00:01:00");
});

test("formats 3599999 as 00:59:59", () => {
  expect(format(3599999)).toBe("00:59:59");
});

test("formats 3600000 as 01:00:00", () => {
  expect(format(3600000)).toBe("01:00:00");
});

test("formats 360000000 as 100:00:00", () => {
  expect(format(360000000)).toBe("100:00:00");
});
