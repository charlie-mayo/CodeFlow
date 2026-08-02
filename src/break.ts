import type { Interface } from "node:readline";
import { ask } from "./prompt";

export async function runBreak(rl: Interface): Promise<boolean> {
  console.log(`
------------------ BREAK ------------------
Get up and move around for a little bit :)
Type 'go' when you're back for another session,
or 'wrap' to close out the day.
`);

  while (true) {
    const command = await ask(rl, "> ");
    if (command === "go") {
      return true;
    } else if (command === "wrap") {
      return false;
    } else {
      console.log(`\nOop, I don't know that command. Try typing 'go' or 'wrap'.\n`);
    }
  }
}
