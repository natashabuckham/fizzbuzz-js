// Here, we create our main function.
function fizzbuzz() {
    // Put your code here...
    for (let i = 1; i < 101; i++) {
        let output = "";

        if (i % 11 == 0) {
            output += "Bong";
        } else {
            if (i % 3 == 0) {
                output += "Fizz";
            };
            
            if (i % 5 == 0) {
                output += "Buzz";
            };
    
            if (i % 7 == 0) {
                output += "Bang";
            };
        };

        if (output == "") {
            console.log(i);
        } else {
            console.log(output); 
        };
    };
};

// Now we run the main function...
fizzbuzz();
