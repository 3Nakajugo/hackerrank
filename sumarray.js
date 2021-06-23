
function simpleArraySum(ar) {
    let sum = 0
    const arraylength = ar.length
    console.log(arraylength)
    for (let index = 0; index < arraylength; index++) {
        
        sum += ar[index]
    }
    console.log(sum)

}
function simpleArraySum(ar) {
    let sum = 0
    for (let index = 0; index < ar.length; index++) {
        const number = parseInt(ar[index])
        sum += number
    }
    return sum

}
console.log(simpleArraySum('1 2 3 4 5'))