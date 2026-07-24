import * as readline from "node:readline";
import { ask } from "./prompt";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const project = await ask(rl, "Which project? ");

console.log("User's input was: " + project);

rl.close();
