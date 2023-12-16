// QUADRATIC EQUATION using almighty formula
let a: number = 1;
let b: number = 6;
let c: number = 8;
let d: number;
let root1: number;
let root2: number;

function quadraticSolver(): void {
    d = (b * b) - 4 * a * c
    d = Math.sqrt(d)
    root1 = (-b - d)/(2 * a)
    root2 = (-b + d)/(2 * a)
    console.log(`The root of the equation are ${root1} and ${root2}.`)
    return;
}

quadraticSolver()

// FACTORIAL
let number: number = 6;
let number2: number = number
let number3: number = number;

function factorialSolver(): void {
    for (let i: number = 1; i < number; i++) {
        number2 = number2 - 1
        number = number * number2
        if (number2 == 1) {
            console.log(`The factorial of ${number3} is ${number}.`)
        }
    }
    return;
}

factorialSolver()

// MULTIPLICATION TABLE
let userInput: number = 7;
let value: number = 0;
console.log(`The multiplication table of ${userInput} is:`)

function multiplicationTable(): void {
    for (let i: number = 0; i < 12; i++) {
        value = value + 1
        let result: number = userInput * value
        console.log(`${userInput} * ${value} = ${result}`)
    }
    return;
}

multiplicationTable()