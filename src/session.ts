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
    } else {
      console.log(`\nOop, I don't know that command. Try typing "status" or "done".\n`);
    }
  }
}
