const longestCommonPrefix = (arr) => {
    let longestPrefix = ''
    for (let i = 0; i < arr.length; i++) {
        let sameLetter = (currentValue) => currentValue[i] === arr[0][i]
        if (arr.every(sameLetter)) {
            longestPrefix += arr[0][i]
        }
    }
    return longestPrefix
}

module.exports = longestCommonPrefix