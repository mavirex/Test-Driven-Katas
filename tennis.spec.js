const { expect } = require('chai');
const tennis = require('./tennis');

describe ('tennis', () => {
    it ('finds the longest common prefix string in an array', () => 
        expect (tennis(['foobar', 'foo', 'foolish'])).to.equal('foo'))
})