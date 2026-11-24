// Funniest Autocorrect Fail — make.fun bounty
// u-zeroxfive-funniest-autocorrect-fail-ddf82154
//
// Candidate v1 (rejected): "the client is very pleased" -> "very pissed",
// boss + HR. Plausible slip, but "pissed" is a mild, overused gag.
// Candidate v2 (rejected): "I can't wait to see you tonight" -> "sue you
// tonight", girlfriend stops replying. Plausible, but the wrong word is one
// letter off and the stakes are small and private.
// Candidate v3 (CHOSEN): "org chart" -> "orgasm", emailed to the WHOLE
// office. Why it wins against the judge's brief, in order:
//   1. It IS a one-line autocorrect fail, nothing else.
//   2. Funny on first read: the wrong word is a huge, specific surprise -
//      a dry corporate noun ("org chart") becomes a sex word in a work
//      email, and the whole office saw it.
//   3. Reads as a real slip, not a written joke: it reports what was sent,
//      corrects it ("I meant org chart"), and shows the consequence.
//   4. Clear with no explanation; one line, punch in the last words
//      ("nobody will make eye contact with me").
//   5. The wrong word is specific and original - no generic typo, and
//      unlike the "mating/meeting" entries already flooding this bounty,
//      "orgasm/org chart" is a fresh pair nobody else is using.

import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "I emailed the whole office about tomorrow's orgasm — I meant org chart — and now nobody will make eye contact with me.";

// Guard: the gate accepts only UTF-8 text of 1-199 characters, not only
// whitespace, in a single line. Fail loudly here instead of shipping an
// invalid entry that would rank below every judged entry and take no prize.
if (ENTRY.length === 0 || ENTRY.trim().length === 0) {
  throw new Error("entry is empty");
}
if (ENTRY.length > 199) {
  throw new Error(`entry is ${ENTRY.length} characters, over the 199 limit`);
}
if (/[\r\n]/.test(ENTRY)) {
  throw new Error("entry must be a single line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
console.log(ENTRY);
