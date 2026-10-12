const items = [
    { name: "Chips", price: 30 },
    { name: "Chocolate", price: 50 },
    { name: "Juice", price: 40 },
    { name: "Biscuits", price: 25 },
    { name: "Soft Drink", price: 45 }
];

function displayMenu() {
    console.log("===== SMART VENDING MACHINE =====");

    for (let i = 0; i < items.length; i++) {
        console.log(
            (i + 1) + ". " +
            items[i].name +
            " - ₹" +
            items[i].price
        );
    }

    console.log("=================================");
}

function calculateChange(amount, price) {

    if (amount < price) {
        return -1;
    }

    return amount - price;
}

function printNumberPattern(number) {

    console.log("Number Pattern:");

    for (let i = 1; i <= number; i++) {

        let row = "";

        for (let j = 1; j <= i; j++) {
            row += i + " ";
        }

        console.log(row);
    }
}

function countdown() {

    for (let i = 3; i >= 1; i--) {
        console.log(i);
    }

    console.log("Your item is ready! 🎉");
}

function vendingMachine() {

    let continuePurchase = true;

    while (continuePurchase) {

        displayMenu();
        let itemNumber = Number(
            prompt("Enter the item number (1-5):")
        );

        if (
            !Number.isInteger(itemNumber) ||
            itemNumber < 1 ||
            itemNumber > items.length
        ) {

            alert("Invalid item number!");

            continuePurchase = confirm(
                "Do you want to try again?"
            );

            continue;
        }

        let amount = Number(
            prompt("Enter the amount of money you have:")
        );

        if (
            isNaN(amount) ||
            amount < 0
        ) {

            alert("Please enter a valid non-negative amount.");

            continuePurchase = confirm(
                "Do you want to try again?"
            );

            continue;
        }

        let selectedItem = items[itemNumber - 1];
        let change = calculateChange(
            amount,
            selectedItem.price
        );

        if (change === -1) {

            alert(
                "Insufficient balance!\n" +
                "Item price: ₹" +
                selectedItem.price +
                "\nYour money: ₹" +
                amount
            );

        }

        else {

            alert(
                "Item selected: " +
                selectedItem.name +
                "\nPrice: ₹" +
                selectedItem.price +
                "\nChange returned: ₹" +
                change
            );

            countdown();
            printNumberPattern(itemNumber);
        }
        continuePurchase = confirm(
            "Do you want to make another purchase?"
        );
    }


    alert("Thank you for using the Smart Vending Machine! 😊");
}

vendingMachine();
function calculateTotal(mark1, mark2, mark3) {

    return mark1 + mark2 + mark3;
}

function calculateAverage(total) {

    return total / 3;
}

function calculateGrade(average) {

    if (average >= 90) {
        return "A";
    }

    else if (average >= 75) {
        return "B";
    }

    else if (average >= 50) {
        return "C";
    }

    else {
        return "F";
    }
}

function studentResult() {

    let continueResult = true;

    while (continueResult) {

        let studentName = prompt(
            "Enter student's name:"
        );


        let mark1 = Number(
            prompt("Enter marks for Subject 1:")
        );

        let mark2 = Number(
            prompt("Enter marks for Subject 2:")
        );

        let mark3 = Number(
            prompt("Enter marks for Subject 3:")
        );

        if (
            isNaN(mark1) ||
            isNaN(mark2) ||
            isNaN(mark3) ||
            mark1 < 0 ||
            mark1 > 100 ||
            mark2 < 0 ||
            mark2 > 100 ||
            mark3 < 0 ||
            mark3 > 100
        ) {

            alert(
                "Invalid marks!\n" +
                "Each mark must be between 0 and 100."
            );

        }

        else {

            let total = calculateTotal(
                mark1,
                mark2,
                mark3
            );

            let average = calculateAverage(total);

            let grade = calculateGrade(average);


            alert(
                "Student Result\n\n" +
                "Name: " + studentName +
                "\nTotal Marks: " + total +
                "\nAverage: " + average.toFixed(2) +
                "\nGrade: " + grade
            );
        }


        continueResult = confirm(
            "Do you want to calculate another student's result?"
        );
    }


    console.log("Student Result Calculator ended.");
}

studentResult();

function multiplicationTable(number) {

    console.log(
        "Multiplication Table of " + number
    );

    for (let i = 1; i <= 10; i++) {

        console.log(
            number + " x " + i +
            " = " +
            (number * i)
        );
    }
}

function calculateNaturalSum(number) {

    let sum = 0;

    for (let i = 1; i <= number; i++) {

        sum = sum + i;
    }

    return sum;
}

function printTriangle(number) {

    console.log("Right Angled Triangle:");

    for (let i = 1; i <= number; i++) {

        let row = "";

        for (let j = 1; j <= i; j++) {

            row += "* ";
        }

        console.log(row);
    }
}

function printSquare(number) {

    console.log("Square Pattern:");

    for (let i = 1; i <= number; i++) {

        let row = "";

        for (let j = 1; j <= number; j++) {

            row += "* ";
        }

        console.log(row);
    }
}

function numberAnalyzer() {

    let continueAnalyzer = true;

    while (continueAnalyzer) {

        let number = Number(
            prompt("Enter a positive integer:")
        );

        if (
            isNaN(number) ||
            number <= 0 ||
            !Number.isInteger(number)
        ) {

            alert(
                "Please enter a valid positive integer."
            );

            continueAnalyzer = confirm(
                "Do you want to try again?"
            );

            continue;
        }

        let result;

        if (number % 2 === 0) {

            result = "Even";

        }

        else {

            result = "Odd";
        }

        multiplicationTable(number);
        let sum = calculateNaturalSum(number);
        if (number % 2 === 0) {
            printSquare(number);
         }
         else {

            printTriangle(number);
        }
        alert(
            "Number: " +
            number +
            "\nThe number is: " +
            result +
            "\nSum of natural numbers from 1 to " +
            number +
            " = " +
            sum
        );
        continueAnalyzer = confirm(
            "Do you want to analyze another number?"
        );
    }
     console.log("Number Analyzer ended.");
}
numberAnalyzer();
