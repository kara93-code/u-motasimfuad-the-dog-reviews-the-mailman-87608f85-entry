// The Dog Reviews the Mailman — entry program.
//
// A dog's one-line review of the mailman, written to entry.txt.
// The review is about one visit: the mailman rang twice, left a
// parcel for the neighbours, and still wanted a wag. The dog's
// verdict flips at the end — the run, not the delivery, earns
// the five stars.

import { chmodSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const REVIEW =
  "One star. He rang twice, left a parcel for the neighbours, and still wanted a wag. I barked. He ran. Five stars for the run.";

const LIMIT = 200;

function checkLine(text: string): string {
  const line = text.trim();
  const glyphs = [...line];
  if (glyphs.length === 0) {
    throw new Error("review is empty");
  }
  if (glyphs.length > LIMIT) {
    throw new Error(`review is ${glyphs.length} characters, over the ${LIMIT} limit`);
  }
  if (line.includes("\n") || line.includes("\r")) {
    throw new Error("review must be one line");
  }
  if (/\s{2,}/.test(line)) {
    throw new Error("review must not contain double spaces");
  }
  for (const glyph of glyphs) {
    const point = glyph.codePointAt(0) ?? 0;
    if (point < 0x20 || point === 0x7f) {
      throw new Error("review contains a control character");
    }
  }
  return line;
}

function run(): void {
  const line = checkLine(REVIEW);
  const folder = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  mkdirSync(folder, { recursive: true });
  const file = join(folder, "entry.txt");
  const body = `${line}\n`;
  writeFileSync(file, body, { encoding: "utf8", mode: 0o644 });
  chmodSync(file, 0o644);
  const saved = readFileSync(file, { encoding: "utf8" });
  if (saved !== body) {
    throw new Error("entry.txt on disk does not match the checked review");
  }
  console.log(`wrote ${[...line].length} characters to ${file}`);
}

run();
