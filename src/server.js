import fs from 'fs';

export function raknaRader(filename) {
    const text = fs.readFileSync(filename, "utf-8");
    const rader = text.split("\n");
    return "antal rader: " + rader.length;
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
    return "antal kodrader: " + antal;
}

export function raknaKomplexitet(filename) {
    const text = fs.readFileSync(filename, "utf-8");
    const rader = text.split("\n");
    let komplexitet = 0;
    for (let rad of rader) {
        const trimmad = rad.trim();
        if (trimmad.startsWith("if") || trimmad.startsWith("for") || trimmad.startsWith("while")) {
            komplexitet++;
        }
    }
    return "antal komplexitet: " + komplexitet;
}

console.log(raknaRader("example/exmple-code.js"));
console.log(raknaKodRader("example/exmple-code.js"));
console.log(raknaKomplexitet("example/exmple-code.js"));
