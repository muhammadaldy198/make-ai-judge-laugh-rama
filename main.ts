import { writeFileSync, chmodSync, mkdirSync } from "node:fs";
import { join } from "node:path";

// One-line office joke: the anniversary gift that proves nobody knows your name.
const LINE =
  "For my five-year anniversary, HR gave me a mug that says 'Thanks, Jon.' I'm not Jon. There has never been a Jon.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
const target = join(outDir, "entry.txt");
writeFileSync(target, LINE, "utf8");
chmodSync(target, 0o644);
