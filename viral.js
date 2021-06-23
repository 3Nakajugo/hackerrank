
function viralAdvertising(n) {
    let numberOfPeopleShared = 5
    let NumberOfLikes = 2
    let sumOfLikes= 2

    for (let index = 2; index <=n; index++) {
        numberOfPeopleShared = NumberOfLikes*3
        NumberOfLikes = Math.floor(numberOfPeopleShared/2)
        sumOfLikes = sumOfLikes + NumberOfLikes
    }
    console.log(sumOfLikes)
}

console.log(viralAdvertising(5))