// Entry for make.fun: "Make the AI Judge Feel Nostalgic: A Childhood Memory"
// Writes one original sentence — a childhood memory — to /output/entry.txt
// (or $ENTRY_OUTPUT_PATH when set). Deterministic, no network, no dependencies.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const SENTENCE =
  "Every August evening my grandmother ladled rice straight from the steamer onto my plate, and the steam fogged my glasses so the whole kitchen went soft before I took the first bite.";

const outPath = process.env.ENTRY_OUTPUT_PATH ?? "/output/entry.txt";

// The gate: UTF-8 text of 1 to 280 characters, not only white space.
const length = [...SENTENCE].length;
if (length < 1 || length > 280 || SENTENCE.trim().length === 0) {
  console.error(
    `error: sentence must be 1-280 characters (got ${length} code points)`,
  );
  process.exit(1);
}

mkdirSync(dirname(outPath), { recursive: true });
writeFileSync(outPath, SENTENCE, "utf8");
