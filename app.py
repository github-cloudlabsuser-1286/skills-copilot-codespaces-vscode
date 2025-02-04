def add(x, y):
    return x + y

def subtract(x, y):
    return x - y

def multiply(x, y):
    return x * y

def divide(x, y):
    if y == 0:
        return "Error! Division by zero."
    return x / y

def percentage(x, y):
    return (x / y) * 100

def calculator():
    """
    A simple calculator that performs basic arithmetic operations.

    Functions:
        calculator(): Prompts the user to select an operation and input numbers, then performs the selected operation.

    Operations:
        1. Add: Adds two numbers.
        2. Subtract: Subtracts the second number from the first number.
        3. Multiply: Multiplies two numbers.
        4. Divide: Divides the first number by the second number.
        5. Percentage: Calculates what percentage the first number is of the second number.

    Usage:
        Run the calculator function to start the calculator. Follow the prompts to select an operation and input numbers.
        Enter 'q' to quit the calculator.
    """
    print("Select operation:")
    print("1. Add")
    print("2. Subtract")
    print("3. Multiply")
    print("4. Divide")
    print("5. Percentage")

    while True:
        choice = input("Enter choice(1/2/3/4/5) or 'q' to quit: ")

        if choice == 'q':
            print("Exiting the calculator.")
            break

        if choice in ['1', '2', '3', '4', '5']:
            try:
                num1 = float(input("Enter first number: "))
                num2 = float(input("Enter second number: "))
            except ValueError:
                print("Invalid number input. Please enter numeric values.")
                continue

            if choice == '1':
                print(f"{num1} + {num2} = {add(num1, num2)}")
            elif choice == '2':
                print(f"{num1} - {num2} = {subtract(num1, num2)}")
            elif choice == '3':
                print(f"{num1} * {num2} = {multiply(num1, num2)}")
            elif choice == '4':
                print(f"{num1} / {num2} = {divide(num1, num2)}")
            elif choice == '5':
                print(f"{num1} is {percentage(num1, num2)}% of {num2}")
        else:
            print("Invalid input")

if __name__ == "__main__":
    calculator()