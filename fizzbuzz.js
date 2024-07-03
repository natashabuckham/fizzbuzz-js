// Here, we create our main function.
function fizzbuzz() {
    // Put your code here...

    

    for (let i = 1; i < 101; i++) {
        let output = "";

        // function to check divisor and add to output string
        const checkDivisor = (i, divisor, word) => {
            if (i % divisor == 0) {output += word};
        };

        checkDivisor(i, 11, "Bong");

        if (output == "") {
            checkDivisor(i, 3, "Fizz");
            checkDivisor(i, 5, "Buzz");
            checkDivisor(i, 7, "Bang");
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
