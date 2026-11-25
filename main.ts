// weird-job-20261125 — my entry for make.fun's "Weirdest Job Title:
// Blind Judge Showdown" bounty ($5 USDC, 60 characters max, title only).
//
// The title sounds like a real job — Senior Writer is an ordinary rank —
// until the twist: the writer apologises for self-driving cars. One
// specific, funny detail beats generic weirdness, and the whole joke fits
// in a job title a company could almost plausibly post.
//
// Try it locally (the grader points MAKEFUN_OUTPUT_DIR at /output):
//   MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE = "Senior Apology Writer for Self-Driving Cars";
const MAX = 60;

function assertFits(value) {
  const size = Array.from(value).length;
  if (value.trim().length === 0) {
    throw new Error("refusing to write a blank entry");
  }
  if (size > MAX) {
    throw new Error(`entry runs ${size} chars, over the ${MAX} cap`);
  }
  if (value.indexOf("\n") !== -1) {
    throw new Error("entry must fit on one line");
  }
  if (/\s{2}/.test(value)) {
    throw new Error("entry must not contain double spaces");
  }
}

function run() {
  assertFits(LINE);
  const folder = process.env.MAKEFUN_OUTPUT_DIR || "/output";
  mkdirSync(folder, { recursive: true });
  writeFileSync(join(folder, "entry.txt"), LINE + "\n");
}

run();
