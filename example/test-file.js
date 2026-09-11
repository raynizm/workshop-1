const text = console.log("Hello, world!");
const test = "Hello, world!";

if (text != null) {
    console.log("first indent.");
    console.log("first indent.");
    console.log("first indent.");
    console.log("first indent.");
    console.log("first indent.");

    if (text.contains("Hello")) {
        console.log("second indent.");
        console.log("first indent.");
        console.log("first indent.");
        console.log("first indent.");
        console.log("first indent.");
    }
}
