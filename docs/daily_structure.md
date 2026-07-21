# Daily Study Structure

The methodology CodeFlow is built to support. This is the "why". The program's behavior spec is in `flow.md`.

**The aim.** Real focused work, done in clean commits. The unit of a day is a commit landed or a task checked off, not a number of hours. A full day is roughly five hours of focused work, but that is held loosely. Your time is tracked and shown so it stays visible. There is no daily hour target you pass or fail, and a lighter day is not a failure.

---

## The spine (do this every day)

1. **Name the day's target.** In the day-start primer you write a TODO list for the day. That list is the target, not a number of hours.
2. **Work one commit at a time.** A commit is the atomic unit. No long break is taken on a dirty tree. Land it clean or stash it with a note first.
3. **A commit taking more than ~90 minutes is a signal, not a reason to grind.** It usually means the commit was scoped too big. Split it.

---

## Two day-types (pick one each morning)

**Build day.** You're writing code toward commits.
**Theory day.** You're learning fundamentals, no code required. Output is a filled page of diagrams and a precise question list. This counts as a complete, successful day. A no-code day is not a failure, it's how you learn.

---

## The levers (a menu, pull what today needs)

- **The primer (for starting).** Deal with yourself, only look for five minutes, guilt-free quit allowed. The exit is concrete and forward, you write the day's TODO list. There is no timer. The five minutes and the fifteen minutes are suggestions, not limits, so orienting never turns into a race against a clock.
- **Diagram-first scaffolding (the default opening move on a build day).** Before syntax, hand-sketch the signal flow or audio-graph for today's feature. That diagram becomes pseudo-code, which becomes code. Translate it to code in the *same* session while it's fresh, don't break between design and code.
- **Flowtime with the phone as the ceiling.** Let the stopwatch count up so you're not watching a countdown. The soft check-in around 50-75 minutes is your phone alarm, not the program, and the one honest question is "climbing or coasting?" If coasting, break while there's gas left. The ceiling is the phone alarm plus your own stop-when-out-of-gas instinct. The program enforces no wall, so this guardrail is a soft one by design.

---

## Breaks

- **Break length scales with effort.** Take what the work took out of you.
- **The long midday break is active and embodied.** Bass, a walk, food. Rule is "no screens, body moving," not "sit quietly with no phone."
- **Coming back gets an optional mini-primer.** Re-entry is one of the hardest moments, and it is hardest after a long, screen-off break. Coming out of any break you can choose a mini-primer to ease in, rather than a cold start. It redisplays the day's list, you check off what you finished, and you rewrite what is left. Retyping the leftover items is the reflection, it makes you re-read each one and gives you the spot to split or reword anything that turned out too big.

---

## Ending the day

- **No hard wall-clock day-end.** You decide when to stop. Working past a rough time is fine, and a short day is fine.
- **What protects tomorrow is the wrap-up, not a forced stop.** A good day should not wreck the next one, and the way that is bought is by ending on a clean tree and a clear starting note, not by a clock that shoves you out of your chair.

---

## Wrap-up (the highest-value slot, every day)

You're buying down tomorrow's starting friction. It reuses the same mark-done-then-rewrite move as the mini-primer, so it feels familiar.

1. Get to a clean tree, committed or explicitly stashed.
2. Close out the list. Mark what you finished, then rewrite what is left so the top of it is what you'll start on tomorrow. The pending items are saved for tomorrow and the finished items are dropped, so the next day starts on only what remains.
3. Read the day summary. It shows sessions, focused work, and tasks checked off, framed as what you did, with no shortfall against a target.

No deliberately broken code. Ever. The breadcrumb is a clean note, not a planted bug.

---

## The list

One TODO list is the spine that runs through the whole day. You write it in the day-start primer, reshape it in the mini-primers and the wrap-up, and it carries to the next day. It lives in a file in a central CodeFlow data folder, one file per project, so CodeFlow can be used across several projects and each keeps its own list. At startup you pick the project, and the day-start primer loads that project's pending items as your starting point.

---

**One line to remember.** Start small (a guilt-free primer), sketch before you type, work one clean commit at a time, stop before you're wrecked, and leave a clean note for tomorrow.
