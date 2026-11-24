// Real-Life Patch Notes: The Comedy Changelog (Node 22, standard library
// only). The entry is one line, at most 160 characters: a software patch
// note for a bug in real life or human biology, in the terse register of a
// real release note. This program writes that line to /output/entry.txt,
// where the gate and the judge read it.
//
// Run outside the grader's container:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "v7.3.1: resolved a race condition where the body requested sleep and the brain opened 47 background tabs instead.";

// Guard: the gate refuses any entry over 160 characters, so fail loudly
// here instead of shipping an invalid line.
if (LINE.length < 1 || LINE.length > 160 || LINE.trim().length === 0) {
  throw new Error(`entry line is ${LINE.length} characters; must be 1-160 and non-blank`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE);
