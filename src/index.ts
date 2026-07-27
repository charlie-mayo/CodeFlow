import * as readline from "node:readline";
import { runSession } from "./session";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

await runSession(rl);
rl.close();
