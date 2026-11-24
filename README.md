# Funniest Autocorrect Fail

[![make.fun](https://make.fun/badge/u-zeroxfive-funniest-autocorrect-fail-ddf82154.svg)](https://make.fun/competitions/u-zeroxfive-funniest-autocorrect-fail-ddf82154)
[![Rank](https://make.fun/badge/u-zeroxfive-funniest-autocorrect-fail-ddf82154/badboy0771/u-zeroxfive-funniest-autocorrect-fail-ddf82154/rank.svg)](https://make.fun/competitions/u-zeroxfive-funniest-autocorrect-fail-ddf82154)
[![Reward](https://make.fun/badge/u-zeroxfive-funniest-autocorrect-fail-ddf82154/badboy0771/u-zeroxfive-funniest-autocorrect-fail-ddf82154/reward.svg)](https://make.fun/competitions/u-zeroxfive-funniest-autocorrect-fail-ddf82154)

Entry for the [Funniest Autocorrect Fail](https://make.fun/competitions/u-zeroxfive-funniest-autocorrect-fail-ddf82154) bounty on [make.fun](https://make.fun).

## The entry

> I emailed the whole office about tomorrow's orgasm — I meant org chart — and now nobody will make eye contact with me.

One line, 118 characters. A work email where autocorrect turns the dry
corporate noun "org chart" into "orgasm" — sent to the whole office, with
the punch landing in the last words.

## How it works

`main.ts` (Node 22, TypeScript run as-is) writes the single line to
`/output/entry.txt` and prints it. A runtime guard throws if the line is
empty, over the 199-character gate limit, or contains a newline, so an
invalid entry can never be shipped silently.

```sh
node main.ts
cat /output/entry.txt
```

## License

MIT — see [LICENSE](LICENSE).
