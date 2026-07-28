import type { Interface } from "node:readline";
import { ask } from "./prompt";
import { Stopwatch, format } from "./stopwatch";


export async function runSession(rl: Interface): Promise<void> {
  const stopwatch = new Stopwatch();
  stopwatch.start();

  let running = true;
  while (running) {
    const command = await ask(rl, "> ");
    if (command === "status") {
      console.log(`\n[status] Current session length: ${format(stopwatch.elapsed())}.\n`);
    } else if (command === "done") {
      console.log(`\n[done] Session done! You worked for ${format(stopwatch.elapsed())}.`);
      running = false;
    } else if (command === "pause") {
      if (stopwatch.isItPaused() === false) {
        stopwatch.pause();
        console.log(`\n[paused] Clock frozen at ${format(stopwatch.elapsed())}. Type "resume" when you're back.\n`);
      } else {
        console.log(`\n[paused] Already on pause. Type "resume" instead.\n`);
      }
    } else if (command === "resume") {
      if (stopwatch.isItPaused()) {
        stopwatch.play();
        console.log(`\n[resumed] Back on the clock at ${format(stopwatch.elapsed())}. Keep going!\n`);
      } else {
        console.log(`\n[resume] The clock isn't paused, it's already running.\n`);
      }
    } else {
      console.log(`\nOop, I don't know that command. Try typing "status" or "done", or "pause"/"resume" .\n`);
    }
  }
}
