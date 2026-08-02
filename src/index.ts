import * as readline from "node:readline";
import { runSession } from "./session";
import { runBreak } from "./break";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let keepGoing: boolean;
do {
  await runSession(rl);
  keepGoing = await runBreak(rl);
} while (keepGoing);

rl.close();
