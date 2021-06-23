function sockMerchant(n, ar) {
    let numberofpairs = 0
    ar.sort()

    for (let index = 0; index < n; index++) {
        if (ar[index] === ar[index + 1]) {
            numberofpairs++
            index += 1
        }
    }
    return numberofpairs

}
console.log(sockMerchant(10, [1, 1, 3, 1, 2, 1, 3, 3, 3, 3]))
// function sockMerchant(n, ar) {
//     let storage = {};
//     let pairs = 0;

//     for (var i = 0; i < n; i++) {
//         storage[ar[i]] = !storage[ar[i]];
//         if (!storage[ar[i]]) pairs++;
//     }

//     return pairs;
// }