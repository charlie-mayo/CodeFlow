import type { Interface } from "node:readline";
import { ask } from "./prompt";


export async function runSession(rl: Interface): Promise<void> {
  let running = true;
  while (running) {
    const command = await ask(rl, "> ");
    if (command === "status") {
      console.log("[status] session running.");
    } else if (command === "done") {
      running = false;
    } else {
      console.log(`I don't know that command :( try typing "status" or "done".`);
    }
  }
}
