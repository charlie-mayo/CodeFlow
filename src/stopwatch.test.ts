import { test, expect } from "vitest";
import { format } from "./stopwatch";

test(`formats zero as "0 seconds"`, () => {
  expect(format(0)).toBe("0 seconds");
});

test(`formats 59999 (just under a minute) as "59 seconds"`, () => {
  expect(format(59999)).toBe("59 seconds");
});

test(`formats 60000 as "1 minute, 0 seconds"`, () => {
  expect(format(60000)).toBe("1 minute, 0 seconds");
});

test(`formats 3599999 as "59 minutes, 59 seconds"`, () => {
  expect(format(3599999)).toBe("59 minutes, 59 seconds");
});

test(`formats 3600000 as "1 hour, 0 minutes"`, () => {
  expect(format(3600000)).toBe("1 hour, 0 minutes");
});

test(`formats 360000000 as "100 hours, 0 minutes"`, () => {
  expect(format(360000000)).toBe("100 hours, 0 minutes");
});
