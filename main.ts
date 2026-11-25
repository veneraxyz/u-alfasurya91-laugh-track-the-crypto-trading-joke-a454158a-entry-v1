import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const JOKE =
  "I bought the dip, then the dip dipped, and now I just call my portfolio a long-term investment.";

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outputDir, { recursive: true });
const outPath = join(outputDir, "entry.txt");
writeFileSync(outPath, JOKE + "\n", "utf8");

// Read-back guard: the file on disk must be exactly the intended line
// plus one trailing newline, and the line must be a valid single joke.
const written = readFileSync(outPath, "utf8");
if (written !== JOKE + "\n") {
  throw new Error("entry.txt does not match the intended joke line");
}
const lines = written.split("\n");
if (lines.length !== 2 || lines[1] !== "") {
  throw new Error("entry.txt must contain exactly one line");
}
const line = lines[0];
if (line.length < 1 || line.length > 200) {
  throw new Error("joke must be 1-200 characters, got " + line.length);
}
if (line.trim().length === 0) {
  throw new Error("joke must not be whitespace-only");
}
for (const ch of line) {
  if (ch.charCodeAt(0) < 32 || ch.charCodeAt(0) === 127) {
    throw new Error("joke must not contain control characters");
  }
}
