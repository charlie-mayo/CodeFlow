import { Stopwatch, format } from "./stopwatch"

console.log("CodeFlow is running.");

const stopwatch = new Stopwatch();
stopwatch.start();

console.log("Time elapsed after program start: ", format(stopwatch.elapsed()));
console.log("Formatter check (expected: 01:02:05): ", format(3725000));
