

// Here, we create our main function.
function fizzbuzz() {
    // Put your code here...
    for (let i = 1; i < 101; i++) {
        if (i % 15 == 0) {
            console.log("FizzBuzz");
        } else if (i % 21 == 0) {
            console.log("FizzBang");
        } else if (i % 35 == 0) {
            console.log("BuzzBang");
        } else if (i % 3 == 0) {
            console.log("Fizz");
        } else if (i % 5 == 0) {
            console.log("Buzz");
        } else if (i % 7 == 0) {
            console.log("Bang");
        } else {
            console.log(i);
        }  
    };
}

// Now we run the main function...
fizzbuzz();
