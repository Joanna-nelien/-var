function add(numberOne, numberTwo) {
    console.log("Add");
    console.log("NumberOne är:, " + numberOne);
    console.log("NumberTwo är:, " + numberTwo);
    let sum = numberOne + numberTwo;

    console.log("Summan blir: " + sum);
}

function subtract(numberOne, numberTwo) {
    console.log("Subtract");
    let sum = numberOne - numberTwo;

    console.log("Summan blir: " + sum);
}

let operator = "subtract";


if (operator === "subtract") {
    subtract(20, 30);
}
else if (operator === "add") { 
    add(20, 30);
}
    

// add(5, 10);
// add(20, 30);