// The Dog Reviews the Mailman — entry program.
//
// A dog's one-line review of the mailman, written to entry.txt.
// Chosen version (C): the mailman promised a treat, handed over a
// bill instead, and ran. The dog kept the bill — and ate the
// envelope. One grievance, one concrete revenge, twist on the
// very last word.

import { chmodSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const REVIEW =
  "One star. He promised a treat, gave me a bill, and ran. I kept the bill. I ate the envelope.";

const MAX_LEN = 200;

function glyphsOf(text: string): string[] {
  return [...text];
}

function validateReview(raw: string): string {
  const review = raw.trim();
  if (review.length === 0) {
    throw new Error("review is empty after trimming");
  }
  for (const glyph of glyphsOf(review)) {
    const point = glyph.codePointAt(0) ?? 0;
    if (point < 0x20 || point === 0x7f) {
      throw new Error("review contains a control character");
    }
  }
  if (review.includes("\n") || review.includes("\r")) {
    throw new Error("review must fit on one line");
  }
  if (/\s{2,}/.test(review)) {
    throw new Error("review must use single spaces only");
  }
  const count = glyphsOf(review).length;
  if (count > MAX_LEN) {
    throw new Error(`review is ${count} characters, over the ${MAX_LEN} limit`);
  }
  return review;
}

function emit(): void {
  const review = validateReview(REVIEW);
  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  mkdirSync(outDir, { recursive: true });
  const target = join(outDir, "entry.txt");
  const contents = `${review}\n`;
  writeFileSync(target, contents, { encoding: "utf8", mode: 0o644 });
  chmodSync(target, 0o644);
  const back = readFileSync(target, { encoding: "utf8" });
  if (back !== contents) {
    throw new Error("entry.txt on disk differs from the validated review");
  }
  console.log(`wrote ${glyphsOf(review).length} characters to ${target}`);
}

emit();
