import fs from 'fs';
import path from 'path';

export function raknaRader(filename) {
    const text = fs.readFileSync(filename, "utf-8");
    const rader = text.split("\n");
    return rader.length;
}

console.log(raknaRader("example/test-file.js"));