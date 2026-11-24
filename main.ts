import { mkdirSync, copyFileSync } from "node:fs";
import { join } from "node:path";

const botDir = process.env.MAKEFUN_BOT_DIR || import.meta.dirname;
const outputDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
// Copy the pre-generated front page into the grader output directory.

mkdirSync(outputDir, { recursive: true });
copyFileSync(join(botDir, "entry.png"), join(outputDir, "entry.png"));
console.log("entry.png written to " + join(outputDir, "entry.png"));
