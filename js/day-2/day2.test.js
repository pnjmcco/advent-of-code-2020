const assert = require('assert');
const fs = require('fs');
const validPasswords = require('./validPasswords');
const validPosition = require('./validPosition');


describe('Count how many passwords are valid based on character count', () => {
    it('should return 2', () => {
        let input = `1-3 a: abcde
1-3 b: cdefg
2-9 c: ccccccccc`
        assert.strictEqual(validPasswords(input), 2);
    });

    it('should return 422', () => {
        fs.readFile('day-2/input.txt', 'utf8', function (err,data) {
            if (err) {
                return console.log(err);
            }
            assert.strictEqual(validPasswords(data), 422)
        });
    });
});

describe('Count how many passwords are valid based on character position', () => {
    it('should return 1', () => {
        let input = `1-3 a: abcde
1-3 b: cdefg
2-9 c: ccccccccc`
        assert.strictEqual(validPosition(input), 1);
    });

    it('should return ', () => {
        fs.readFile('day-2/input.txt', 'utf8', function (err,data) {
            if (err) {
                return console.log(err);
            }
            assert.strictEqual(validPosition(data), 451)
        });
    });
});