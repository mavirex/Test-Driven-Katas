const wrap = (line, maxLen) => {
    let outPut = ''
    if (line.length > 0) {
    outPut += line[0]
    for (let i = 1; i < line.length; i++) {
        if (i % maxLen === 0) {
            outPut += '\n'
        }
        outPut += line[i]
    }
    }
    return outPut
};

console.log(wrap('hello world', 1))

module.exports = wrap;