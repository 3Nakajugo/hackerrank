// Ivan
function aVeryBigSum(ar) {
    let sum = 0

    for(let index=0; index<ar.length; index++ ){
        sum += ar[index];
    }
    return sum
}


//collins

// function aVeryBigSum(ar) {
//     let sum = 0
//     ar.forEach(element=>{
//         sum += element
//         console.log(sum)

//     })
//     console.log(sum);

// }

//iden

// function aVeryBigSum(ar) {
//     console.log("here")
   
//     let sum = ar.reduce((acc, curr) => {
//         console.log(typeof(acc))
//       return acc + curr
//     })
//     console.log(sum)

// }


let ar = [1000000001,  1000000002, 1000000003, 1000000004, 1000000005]
aVeryBigSum(ar)