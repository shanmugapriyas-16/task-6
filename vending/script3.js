const items = [
    { name: "Chips", price: 30 },
    { name: "Chocolate", price: 50 },
    { name: "Juice", price: 40 },
    { name: "Biscuits", price: 25 },
    { name: "Soft Drink", price: 45 }
];

function displayMenu() {

    let menu="----- SMART VENDING MACHINE-----\n";

    for (let i = 0; i < items.length; i++) {

        menu+=
            (i + 1) + ". " +
            items[i].name +
            " - ₹" +
            items[i].price + "\n";
       
    }

    menu+="\n--------------------------------";
    alert(menu);
}


function calculateChange(amount, price) {

    if (amount < price) {
        return -1;
    }

    return amount - price;
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

            alert(
                "Please enter a valid non-negative amount."
            );

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

        } else {

            alert(
                "Item selected: " +
                selectedItem.name +
                "\nPrice: ₹" +
                selectedItem.price +
                "\nChange returned: ₹" +
                change
            );
        }


       
        continuePurchase = confirm(
            "Do you want to make another purchase?"
        );
    }


    alert(
        "Thank you for using the Smart Vending Machine! "
    );
}
vendingMachine();