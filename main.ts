import { mkdirSync, writeFileSync } from "node:fs";

const entry =
  "The sun is up at 5 a.m. on my day off and gone by 5 p.m. when I finally have time. It has never once asked when I am free.";

try {
  mkdirSync("/output", { recursive: true });
} catch {
  // /output may already exist; best effort only.
}

writeFileSync("/output/entry.txt", entry, "utf8");
