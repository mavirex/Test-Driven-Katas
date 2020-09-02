const { expect } = require('chai');
const longestCommonPrefix = require('./longestCommonPrefix');

describe ('longestCommonPrefix', () => {
    it ('finds the longest common prefix string in an array', () => 
        expect (longestCommonPrefix(['foobar', 'foo', 'foolish'])).to.equal('foo'))
    it ('returns an empty string if the array values have no common prefix', () => 
        expect (longestCommonPrefix(['foobar', 'bazz', 'hello world'])).to.equal(''))
    it ('returns an empty string for an empty array', () => 
        expect (longestCommonPrefix([])).to.equal(''))
})