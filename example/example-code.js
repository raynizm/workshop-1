const text = console.log("Hello, world!");
if (text != null) {
    console.log("first indent.");
    if (text.contains("Hello")) {
        console.log("second indent.");
        if (text.contains("world")) {
            console.log("third indent.");
            if (text.contains("!")) {
                console.log("fourth indent.");
                if (text.contains("Hello, world!")) {
                    console.log("fifth indent.");
                   if (text.contains("Hello, world!")) {
                        console.log("sixth indent.");   
                    }
                }
            }
        }  
    } 
}