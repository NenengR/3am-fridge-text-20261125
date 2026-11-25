// Revision: verified the line reads like a 3 a.m. text from the fridge itself, first person, no milk/ice/door cliche.
// Entry: "It is 3 a.m. Your leftovers have unionized and demand better lighting. I am only the messenger." (95 chars)
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const entry = "It is 3 a.m. Your leftovers have unionized and demand better lighting. I am only the messenger.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), entry, "utf8");
