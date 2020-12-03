const assert = require('assert');
const treeCounter = require('./treeCounter');
const fs = require('fs');

describe('Count how many passwords are valid based on character count', () => {
    it('should return 2', () => {
        let input = `..##.......
#...#...#..
.#....#..#.
..#.#...#.#
.#...##..#.
..#.##.....
.#.#.#....#
.#........#
#.##...#...
#...##....#
.#..#...#.#`
        expect(treeCounter(input)).toBe(7);
    });

    it('should return 422', () => {
        fs.readFile('day-3/input.txt', 'utf8', function (err,data) {
            if (err) {
                return console.log(err);
            }
            expect(treeCounter(data)).toBe(211);

        });
    });
});