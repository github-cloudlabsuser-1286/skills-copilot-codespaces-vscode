class Calculator {
    add(x, y) {
        return x + y;
    }

    subtract(x, y) {
        return x - y;
    }

    multiply(x, y) {
        return x * y;
    }

    divide(x, y) {
        if (y === 0) {
            return "Error! Division by zero.";
        }
        return x / y;
    }

    percentage(x, y) {
        return (x / y) * 100;
    }
}

const calculator = new Calculator();

function main() {
    console.log("Welcome to the Calculator!");
    console.log("Select operation:");
    console.log("1. Add");
    console.log("2. Subtract");
    console.log("3. Multiply");
    console.log("4. Divide");
    console.log("5. Percentage");

    const readline = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout
    });

    readline.question("Enter choice (1/2/3/4/5): ", choice => {
        if (['1', '2', '3', '4', '5'].includes(choice)) {
            readline.question("Enter first number: ", num1 => {
                readline.question("Enter second number: ", num2 => {
                    num1 = parseFloat(num1);
                    num2 = parseFloat(num2);

                    let result;
                    switch (choice) {
                        case '1':
                            result = calculator.add(num1, num2);
                            console.log(`${num1} + ${num2} = ${result}`);
                            break;
                        case '2':
                            result = calculator.subtract(num1, num2);
                            console.log(`${num1} - ${num2} = ${result}`);
                            break;
                        case '3':
                            result = calculator.multiply(num1, num2);
                            console.log(`${num1} * ${num2} = ${result}`);
                            break;
                        case '4':
                            result = calculator.divide(num1, num2);
                            console.log(`${num1} / ${num2} = ${result}`);
                            break;
                        case '5':
                            result = calculator.percentage(num1, num2);
                            console.log(`${num1} is ${result}% of ${num2}`);
                            break;
                    }
                    readline.close();
                });
            });
        } else {
            console.log("Invalid choice. Please restart the program and try again.");
            readline.close();
        }
    });
}

main();