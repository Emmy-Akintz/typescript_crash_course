"use strict";
// QUADRATIC EQUATION using almighty formula
let a = 1;
let b = 6;
let c = 8;
let d;
let root1;
let root2;
function quadraticSolver() {
    d = (b * b) - 4 * a * c;
    d = Math.sqrt(d);
    root1 = (-b - d) / (2 * a);
    root2 = (-b + d) / (2 * a);
    console.log(`The root of the equation are ${root1} and ${root2}.`);
    return;
}
quadraticSolver();
// FACTORIAL
let number = 6;
let number2 = number;
let number3 = number;
function factorialSolver() {
    for (let i = 1; i < number; i++) {
        number2 = number2 - 1;
        number = number * number2;
        if (number2 == 1) {
            console.log(`The factorial of ${number3} is ${number}.`);
        }
    }
    return;
}
factorialSolver();
// MULTIPLICATION TABLE
let userInput = 7;
let value = 0;
console.log(`The multiplication table of ${userInput} is:`);
function multiplicationTable() {
    for (let i = 0; i < 12; i++) {
        value = value + 1;
        let result = userInput * value;
        console.log(`${userInput} * ${value} = ${result}`);
    }
    return;
}
multiplicationTable();
