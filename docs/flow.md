# CodeFlow — Program Behavior Spec

The prompt-by-prompt flow the CLI implements. This is the "what it does" spec. The methodology behind it is in `daily_structure.md`.

---

## Concepts

- **Day.** One run of the program, from morning setup to wrap-up.
- **Session.** One Flowtime work block. A day is a chain of sessions with breaks between them.
- **The list.** One TODO list for the day, and the spine that connects everything. You write it in the day-start primer, mark items done and rewrite it in the mini-primers and in the wrap-up, and its pending items are saved at day-end for tomorrow. Each item is a line with a done or not-done checkbox.
- **Primer.** A day-start initiation ritual, run once. It walks you from a cold start to a written TODO list for the day. There is no timer. The suggested fifteen minutes is only a suggestion.
- **Mini-primer.** A lighter re-entry ritual you can choose coming out of any break. It redisplays the day's list, lets you check off what you finished, and has you rewrite what is left. No timer. The suggested five minutes is only a suggestion.
- **Phone timer.** The program never runs the 50-75 min check-in itself. It reminds you to set a timer on your phone at session start. Your phone is the alarm.
- **No day-end wall.** The program has no wall-clock day-end. You decide when the day is done, and you end it yourself from a break.

---

## The list, and where it lives

The list persists between days. It is stored in a file in a central CodeFlow data folder, one file per project. At startup you tell CodeFlow which project you are working on, and it loads that project's pending items. At day-end the wrap-up saves the pending items back, with the finished items dropped, so the next day starts on only what is left.

---

## Mid-session commands

```
[p]ause      stop the stopwatch for a short interruption (resume with the same command)
[d]one       end the session, log the time, start a break
[s]tatus     show session elapsed and total work today
[h]elp       list the session commands and what each one does
```

`done` is the only way to end a session. Ending a session always flows into a break. From the break you either start another session or wrap up the day. There is no separate `break` command.

---

## The flow

### Morning setup
```
$ study

  Good morning. Let's set up the day.

> Which project today?
> Day type? [b]uild or [t]heory:

  Locked in. <type> day on <project>.
  Remember: sketch before you type. One clean commit at a time.
```

### Day-start primer (once, no timer)
```
  PRIMER
  Your cold start. The trick is to only look for five minutes.
  Quitting now is allowed, no guilt. There's no timer, take the
  time you need, maybe fifteen minutes, to get your bearings.
  On a build day this is a good moment to sketch the first box
  of your diagram before any code.

  [if yesterday left pending items, they show here as your
   starting point]

  When you're oriented, write today's TODO list. That's your exit.

> Press ENTER when you're ready to write it...

  Type each thing you want to get done today, one per line.
  Press ENTER on an empty line to finish.

  1. wire up the session command loop
  2. get status showing real elapsed time
  3.
  (empty line ends the list)

  Today's map:
   - wire up the session command loop
   - get status showing real elapsed time

  Nice, that's the day laid out. You've already started.
> Type 'go' to start your first session.
```

### Session
```
  SESSION <n>

  >> Set a 50-75 min timer on your PHONE now. <<
  When it goes off, that's your "climbing or coasting?" check-in.

> Timer set? Press ENTER to start the stopwatch...
  Stopwatch running.  00:00
  Commands: [p]ause  [d]one  [s]tatus  [h]elp
```

Status:
```
    s
  Session <n> elapsed: 00:41:12   |   Work today: 00:41:12
```

Pause and resume:
```
    p
  Paused at 00:41:12. Type 'p' again to resume.
    p
  Resumed. Stopwatch running.
```

Done:
```
    d
  Session <n> done. 01:12:30 logged.
  Tree check: is it clean or stashed? [enter when done]
  [then a break starts]
```

### Break
```
  BREAK
  Screens off, body moving. Bass, a walk, food.

> Press ENTER to start the break...
  Break running.
  Type 'go' when you're back for another session,
  or 'wrap' to close out the day.
```

Choosing `go` asks whether to ease in first:
```
    go
  Ease in with a primer? [y/n]
    y
  [the mini-primer runs, then the next session starts]
    n
  [straight into the next session]
```

Choosing `wrap` goes to the wrap-up.

### Mini-primer (chosen from the break)
```
  MINI-PRIMER
  Coming back in. Ease in, no rush, no timer. Take five minutes
  if you need them.

  Here's the list you set this morning. What have you finished?

   1. [ ] wire up the session command loop
   2. [ ] get status showing real elapsed time
   3. [ ] add pause and resume

> Numbers you've finished (e.g. 1,3), or ENTER for none:
  1

  Done so far today:
   1. [x] wire up the session command loop

  Now rewrite what's still on your plate, one per line. Retype
  anything you're carrying over, split or reword it if you want,
  add anything new. ENTER on an empty line to finish.

  1. show status elapsed for the current session
  2. show the running work total for the day
  3. add pause and resume
  (empty line ends the list)

  Today's map:
   1. [x] wire up the session command loop
   2. [ ] show status elapsed for the current session
   3. [ ] show the running work total for the day
   4. [ ] add pause and resume

  Good, you can see the shape of it. Ready when you are.
> Press ENTER to drop into the session...
```

### Wrap-up
```
  WRAP-UP
  The most valuable fifteen minutes of the day. You're setting
  tomorrow-you up so starting is easy.

  1. Tree clean or explicitly stashed?
> Press ENTER once it's committed or stashed...

  2. Let's close out your list.

  Where you're at:
   1. [x] wire up the session command loop
   2. [ ] show status elapsed for the current session
   3. [ ] show the running work total for the day
   4. [ ] add pause and resume

> Numbers you finished today (e.g. 2,3), or ENTER for none:
  2,3

  Done today:
   1. [x] wire up the session command loop
   2. [x] show status elapsed for the current session
   3. [x] show the running work total for the day

  Now write what tomorrow-you should pick up, one per line. This
  is the first thing you'll see in the morning, so make it a clear
  starting point. Retype what's carrying over, split or reword it.
  ENTER on an empty line to finish.

  1. add pause and resume, start with the freeze on 'p'
  (empty line ends the list)

  Saved for tomorrow:
   1. [ ] add pause and resume, start with the freeze on 'p'

  3. Day summary
     Sessions: 3
     Focused work: 04:20
     Tasks checked off: 3

  Three solid sessions and three things done. Good day. Rest up,
  the list will be right where you left it in the morning.
```

The closing line adapts to the day. A short or rough day gets reassurance instead, along the lines of "one session and a clean note is still a real day, that counts."

---

## Design principles

- The program nudges, it never forces. There is no day-end wall and no forced stop. You are the architect, the program is a coach.
- Your phone owns the check-in alarm. There is no hidden timer in the program.
- One list is the spine. The day-start primer writes it, the mini-primers and the wrap-up reshape it, and it carries to tomorrow with the finished items dropped.
- The wrap-up protects tomorrow by leaving a clean starting point, not by forcing a stop time.
- Progress is shown, never judged. The day summary reports what you did, sessions, focused work, and tasks checked off, with no target to fall short of.
- Encouragement runs throughout. Sessions and days close with a word that fits how they went, a genuine good job on a strong day and reassurance on a short one.
