function multiplicationTable(number) {
  console.log("===== MULTIPLICATION TABLE =====");

    for (let i = 1; i <= 10; i++) {
        console.log(number + " x " + i + " = " + (number * i));
    }

    console.log("================================");
}
function printPattern(number) {
   console.log("===== PATTERN =====");
     if (number % 2 === 0) {
      for (let i = 1; i <= number; i++) {        
        let row = "";
        for (let j = 1; j <= number; j++) {
                row += "* ";
            }
             console.log(row); }
             } else {
        for (let i = 1; i <= number; i++) {
           let row = "";
            for (let j = 1; j <= i; j++) {
                row += "* ";
            }
         console.log(row);
        }
    }

    console.log("===================");
}


let runAgain = true;

while (runAgain) {

    let input = prompt("Enter a natural number:");

    let number = Number(input);

    if (input === "" || isNaN(number) || number < 1) {

        alert("Please enter a valid natural number.");

    } else {

       
        let type;

        if (number % 2 === 0) {
            type = "Even";
        } else {
            type = "Odd";
        }

       
        let sum = 0;

        for (let i = 1; i <= number; i++) {
            sum = sum + i;
        }
         multiplicationTable(number);
         printPattern(number);
        alert(
            "Number: " + number +
            "\nType: " + type +
            "\nSum from 1 to " + number + ": " + sum
        );
    }
    runAgain = confirm("Do you want to run the program again?");
}