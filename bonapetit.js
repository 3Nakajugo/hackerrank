function bonAppetit(bill, k, b) {
    let sum = 0

    for (let index = 0; index < bill.length; index++) {
        if (bill[index] !== bill[k]) {
            sum += bill[index]
        } 
    }
    let oursSplit = b - (sum / 2);
    if (oursSplit === 0) {
        return console.log("Bon Appetit");
    } else {
        return console.log(oursSplit);
    }
}

function bonAppetit(bill, k, b) {
    let oursSplit = 0;

    bill.forEach((item, index) => {
        if (index !== k) {
            oursSplit += item;
        }
    });
    oursSplit = b - (oursSplit / 2);
    if (oursSplit === 0) {
        console.log("Bon Appetit");
    } else {
        console.log(oursSplit);
    }
}

// console.log(bonAppetit([3, 10, 2, 9],4 1, 7))