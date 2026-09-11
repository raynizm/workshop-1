import fs from 'fs';
import path from 'path';

export function raknaRader(filename) {
    const text = fs.readFileSync(filename, "utf-8");
    const rader = text.split("\n");
    return rader.length;
}

export function raknaKodRader(filename) {
    const text = fs.readFileSync(filename, "utf-8");
    const rader = text.split("\n");
    let antal = 0;
    for (let rad of rader) {
        const trimmad = rad.trim();
        if (trimmad === "") continue;
        if (trimmad === "{" || trimmad === "}") continue;
        antal++;
    }
    return antal;
}

console.log(raknaRader("example/test-file.js"));
console.log(raknaKodRader("example/test-file.js"));
