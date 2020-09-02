const { expect } = require('chai');
const twoSum = require('./twoSum');

describe ('twoSum', () => {
    it ('returns the indices in an array that add up to the target', () => 
        expect (twoSum([1,2,3], 5)).to.eql([1,2]))
    it ('returns an empty array if the target is zero', () => 
        expect (twoSum([1,2,3], 0)).to.eql([]))
    it ('returns an empty array if no elements add up to target value', () => 
        expect (twoSum([1,2,3], 10)).to.eql([]))
    it ('does not use same element more than once', () => 
        expect (twoSum([2,2,3], 5)).to.eql([0,2]))
})