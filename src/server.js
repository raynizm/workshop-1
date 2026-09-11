import fs from 'fs';
const utf8 = "utf-8";

// returns the number of lines in a file
export function raknaRader(filename) {
    const text = fs.readFileSync(filename, utf8);
    const rader = text.split("\n");
    return "antal rader: " + rader.length;
}

// returns the number of code lines in a file (ignores empty lines and lines with only braces)
export function raknaKodRader(filename) {
    const text = fs.readFileSync(filename, utf8 );
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

// returns the cyclomatic complexity of a file (counts the number of decision points)
export function raknaKomplexitet(filename) {
    const text = fs.readFileSync(filename, utf8);
    const rader = text.split("\n");
    let komplexitet = 0;
    for (let rad of rader) {
        const trimmad = rad.trim();
        if (trimmad.startsWith("if") || trimmad.startsWith("for") || trimmad.startsWith("while") || trimmad.includes("{") ) {
            komplexitet++;
        }
    }
    if (komplexitet > 4) {
        console.log("Warning: Complexity exceeds threshold!");
    }
    return "antal komplexitet: " + komplexitet;
}

// analyzes a file and prints the number of lines, code lines, and cyclomatic complexity
export function statistik(filnamn) {
    console.log(raknaRader(filnamn));
    console.log(raknaKodRader(filnamn));
    console.log(raknaKomplexitet(filnamn));   
   
}

// analyzes all files in a folder and prints the statistics for each file
export function analiseramap(foldername) {        
    // Implementation for map analysis
    const filer = fs.readdirSync(foldername);
    let antalfiler = 0;
    for (let fil of filer) {
        console.log("Analyzing file: " + fil);
        
        const stat = fs.statSync(foldername + "/" + fil);
        if (stat.isFile()) {
            statistik(foldername + "/" + fil);
            antalfiler++;
        }
        console.log('-------------------------------');
    }
    return "antal filer: " + antalfiler;
}
console.log(analiseramap("example"));