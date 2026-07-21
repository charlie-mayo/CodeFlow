# CodeFlow — Build Commit Ladder

Locked 2026-07-21, reworked the same day after the flow revision (dropped day-end wall, break fork, the two primers and the shared list, reworked wrap-up, and testing woven through). Charlie writes every line himself, one commit at a time, and only moves to the next commit when he says so. He may refine this ladder himself as he builds. Titles use conventional-commit style. Each rung notes the one new thing it teaches, since this build doubles as a TypeScript on-ramp.

The build stays runnable from commit 1 on. Every rung leaves something you can run and see.

**On dependencies.** The *runtime* code uses only Node's built-ins, no runtime libraries, so the stopwatch, the readline layer, and the file I/O are all hand-written and understood. Test and dev tooling are a separate category. Vitest (the test framework) and the CI workflow are dev dependencies, which is normal and expected, and setting them up is its own small lesson.

---

## Phase 0 — Scaffolding (get the toolchain running end to end)

**1. `chore: scaffold project`**
`git init`, then `package.json`, `tsconfig.json`, `.gitignore`, a README stub, and a one-line `src/index.ts` that prints a greeting. Goal is proving `npx tsx src/index.ts` runs before any real logic exists.
*Teaches: how a TS/Node project is wired, and how tsx runs it.*

## Phase 1 — Tested primitives (small building blocks, each with its tests)

**2. `feat: add stopwatch`**
A `src/stopwatch.ts` with start, elapsed, and a format helper that turns seconds into `HH:MM:SS`. `index.ts` demos it.
*Teaches: modules, imports, and a first class or set of typed functions.*

**3. `test: add stopwatch unit tests`**
Install Vitest and write the first test file. Cover the formatter's edges, zero, 59 seconds, the rollover at 60 seconds, and hours.
*Teaches: unit testing, assertions with `expect`, and how a test file is run. QA: unit testing.*

**4. `feat: add prompt helper`**
A `src/prompt.ts` that wraps Node's `readline` in a small `ask()` you can `await`. Build it so the input source can be swapped for a fake later, which the integration test in commit 20 will use. `index.ts` asks a question and echoes the answer.
*Teaches: async/await and reading keyboard input, the I/O backbone of the whole program.*

**5. `feat: add the list`**
A `src/list.ts`. The day's TODO list as an array of `{ text, done }` items, with functions to build it from typed lines, render it with `[x]` and `[ ]` checkboxes, mark items done by their numbers, and replace the pending items with a fresh set of lines.
*Teaches: arrays of objects and mapping over them. This is the data model under both primers and the wrap-up.*

**6. `test: add list unit tests`**
Cover marking items done, rendering the checkboxes, and rewriting the pending items.
*Teaches: unit testing logic that holds state. QA: unit testing.*

## Phase 2 — The session (the heart of the program)

**7. `feat: add a session command loop`**
A `src/session.ts` that loops reading a command, recognizing only `[s]tatus` and `[d]one`, where `done` ends the loop. No stopwatch yet. `index.ts` runs one session.
*Teaches: a command loop and simple state, your first real control flow.*

**8. `feat: wire the stopwatch into the session`**
Bring the stopwatch in. `status` now shows real elapsed time and `done` logs it.
*Teaches: reusing a module inside a loop.*

**9. `feat: add pause and resume`**
A `[p]ause` command that freezes the stopwatch and resumes on a second press, so the work total stays honest through short interruptions. The frozen state lives in the stopwatch.
*Teaches: mutable state over time and keeping the clock correct.*

**10. `test: add pause and elapsed tests`**
Prove that elapsed time excludes the frozen span, and confirm the stopwatch tests from commit 3 still pass after the change.
*Teaches: testing stateful logic, and why a green suite matters when you change old code. QA: unit and regression testing.*

**11. `feat: add the check-in`**
A `[c]heck-in` command that asks "climbing or coasting?" and nudges you toward `done` if coasting.
*Teaches: branching on input.*

## Phase 3 — Breaks and the day's rhythm

**12. `feat: add breaks and the go/wrap fork`**
A `src/break.ts` that runs after a session ends. It offers `go` to start another session or `wrap` to close out the day. This is the session-to-break loop. `index.ts` now runs sessions chained by `go` until `wrap`.
*Teaches: control flow across states, and the nudge-not-force principle.*

**13. `feat: track total work across the day`**
Sum the finished sessions plus the running one, show the total in `status`, and carry it toward the day summary.
*Teaches: accumulating state across iterations.*

## Phase 4 — Setup, primers, and wrap-up (assemble the full day)

**14. `feat: add morning setup`**
Ask which project you're working on and the day type, build or theory, and hold them for the run.
*Teaches: gathering and holding config for a run.*

**15. `feat: add the day-start primer`**
The once-a-day primer before the first session. It walks you from a cold start to a written TODO list, entered one item per line, with no timer.
*Teaches: composing states in sequence, and building the list from input.*

**16. `feat: add the mini-primer`**
The break's `go` first asks "ease in with a primer? [y/n]". On yes, run the re-entry primer, which redisplays the list, lets you check off finished items by number, and has you rewrite what is left.
*Teaches: conditional flow based on context, and reshaping the list.*

**17. `feat: add wrap-up and the day summary`**
The break's `wrap` runs the wrap-up, the clean-tree nudge, the final mark-done-then-rewrite pass on the list, and a summary showing sessions, focused work, and tasks checked off. No target, no shortfall.
*Teaches: closing the loop cleanly.*

**18. `refactor: gather the day into one state object`**
Pull the scattered state, the list, the totals, the session count, and the setup config, into one typed shape the states share.
*Teaches: seeing accumulated state and giving it structure, a core skill and a good `refactor:` in the history.*

## Phase 5 — Whole-program QA, persistence, and packaging

**19. `feat: persist the list to a central data file`**
Store the list in a file in a central CodeFlow data folder, one file per project. Load the project's pending items at startup, which now feeds the day-start primer, and save them at wrap-up with the finished items dropped.
*Teaches: reading and writing files, and real persistence across days.*

**20. `test: add integration and smoke tests`**
Using the swappable input from commit 4 and Vitest's mocking, drive a whole day with a scripted set of answers and assert the flow behaves. Add a smoke test that the program starts and reaches wrap-up without throwing.
*Teaches: testing composed behavior rather than one function. QA: integration and smoke testing.*

**21. `docs: add a manual test plan and exploratory charters`**
Write test cases drawn from `flow.md`, a set of exploratory session charters, and a bug log. These are the manual QA artifacts an interviewer can read.
*Teaches: turning a spec into test cases. QA: manual, functional, system, and exploratory testing.*

**22. `chore: add CI to run typecheck and tests`**
A GitHub Actions workflow that typechecks and runs `vitest run` on every push, so the suite is green in a pipeline, not just on your machine.
*Teaches: automated testing in CI, the team-ready signal recruiters scan for.*

**23. `chore: package as a runnable command`**
A `bin` entry in `package.json` so you can type `codeflow` from anywhere, plus a proper README with usage.
*Teaches: how a Node CLI becomes an installed command, and the finishing touches recruiters see first.*

---

## How the testing maps to QA work

Each testing type from the job hunt is tied to something real in this repo.

- **Unit testing** — commits 3, 6, and 10.
- **Regression testing** — the running discipline that every commit keeps the earlier tests green, called out at commit 10.
- **Integration testing** — commit 20.
- **Smoke testing** — commit 20.
- **Functional and system testing** — commit 21, the test plan run against the spec.
- **Exploratory testing** — commit 21, the charters and the bug log.
- **Automated test runs in CI** — commit 22.
