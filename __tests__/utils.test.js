const { isItAId, isItAPalindrome } = require("../src/utils");


describe('UTILS - isItAId', () => {

    test('with a number', async() => {
        expect(isItAId(1)).toBeTruthy();
    })

    test('with a string number', async() => {
        expect(isItAId('1')).toBeTruthy();
    })

    test('with a string', async() => {
        expect(isItAId('test')).toBeFalsy();
    })

    test('with a null', async() => {
        expect(isItAId()).toBeFalsy();
    })

    test('with a empty value', async() => {
        expect(isItAId('')).toBeFalsy();
    })
})

describe('UTILS - isItAPalindrome', () => {

    test('with a palindrome number', async() => {
        expect(isItAPalindrome(101)).toBeTruthy();
    })

    test('with a not palindrome number', async() => {
        expect(isItAPalindrome(13)).toBeFalsy();
    })

    test('with a palindrome string', async() => {
        expect(isItAPalindrome('abba')).toBeTruthy();
    })

    test('with a not palindrome string', async() => {
        expect(isItAPalindrome('test')).toBeFalsy();
    })

    test('with a empty string', async() => {
        expect(isItAPalindrome('')).toBeFalsy();
    })

    test('with a empty string', async() => {
        expect(isItAPalindrome()).toBeFalsy();
    })
})