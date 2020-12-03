const assert = require('assert');
const findTwo = require('./findTwo');
const findThree = require('./findThree');
const fs = require('fs');

describe('Find Two numbers that add up to 2020', () => {
    it('should return 514579', () => {
        let input = `1721
        979
        366
        299
        675
        1456`
        expect(findTwo(input)).toBe(514579);
    });

    it('should return 1018944', () => {
        fs.readFile('day-1/input.txt', 'utf8', function (err,data) {
            if (err) {
                return console.log(err);
            }
            expect(findTwo(data)).toBe(1018944);
        });
    });
});


describe('Find Three numbers that add up to 2020', () => {
    it('should return 241861950', () => {
        let input = `1721
        979
        366
        299
        675
        1456`
        expect(findThree(input)).toBe(241861950);
    });

    it('should return 8446464', () => {
        fs.readFile('day-1/input.txt', 'utf8', function (err,data) {
            if (err) {
                return console.log(err);
            }
            expect(findThree(data)).toBe(8446464);
        });
    });
});