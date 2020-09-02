const twoSum = (arr, target) => {
    const outPut = [];
    for (let i = 0; i < arr.length; i++) {
        for (let j = i +1; j < arr.length; j++) {
            if (arr[i] + arr[j] === target) {
                outPut.push(i, j)
                return outPut
            }
        }
    }
    return outPut
}

module.exports = twoSum