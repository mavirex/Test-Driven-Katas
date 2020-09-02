const { expect } = require('chai');
const wrap = require('./wrap');

describe ('wrap', () => {
    it ('Returns empty string if empty string was provided', () => {
        expect(wrap('', 10)).to.equal('')
    })
    it ('actually line breaks at the nth index', () => 
        expect (wrap('hello world, I am a computer', 5)).to.equal(
            'hello\n worl\nd, I \nam a \ncompu\nter' 
        ))
    it ('returns the same string if the if column number is 0', () => 
        expect (wrap('hello world', 0)).to.equal(
            'hello world' 
        ))
})