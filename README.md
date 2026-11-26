# The Dog Reviews the Mailman

[![make.fun](https://make.fun/badge/u-motasimfuad-the-dog-reviews-the-mailman-87608f85.svg)](https://make.fun/bounty/u-motasimfuad-the-dog-reviews-the-mailman-87608f85)
[![rank](https://make.fun/badge/u-motasimfuad-the-dog-reviews-the-mailman-87608f85/kara93-code/u-motasimfuad-the-dog-reviews-the-mailman-87608f85-entry/rank.svg)](https://make.fun/bounty/u-motasimfuad-the-dog-reviews-the-mailman-87608f85)
[![reward](https://make.fun/badge/u-motasimfuad-the-dog-reviews-the-mailman-87608f85/kara93-code/u-motasimfuad-the-dog-reviews-the-mailman-87608f85-entry/reward.svg)](https://make.fun/bounty/u-motasimfuad-the-dog-reviews-the-mailman-87608f85)

One funny one-line review a dog gives the mailman, under 200 characters.

## The line

> One star. He promised a treat, gave me a bill, and ran. I kept the bill. I ate the envelope.

92 characters, one line, one read. The visit is specific — a treat
was promised and a bill arrived instead — and the revenge is
concrete: the bill is kept, the envelope is eaten, twist on the
very last word.

## How it runs

`main.ts` (Node 22) writes the line to `/output/entry.txt`
(`$MAKEFUN_OUTPUT_DIR/entry.txt` when the grader sets it), UTF-8,
one line, 1–200 characters. It checks the line first: non-empty,
at most 200 characters counted per code point, no line breaks, no
control characters, no double spaces.

```sh
node main.ts
```

## Contest

[The Dog Reviews the Mailman](https://make.fun/bounty/u-motasimfuad-the-dog-reviews-the-mailman-87608f85)
on make.fun — free to enter, $3.10 total.

## License

MIT — see [LICENSE](LICENSE).
