const text = console.log("Hello, world!");

if (text != null) {
    console.log("first indent.");

    if (text.contains("Hello")) {
        console.log("second indent.");
    }
}
