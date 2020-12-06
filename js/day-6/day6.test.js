const fs = require('fs');
const customsDeclarations = require('./customsDeclarations')
const customsDeclarations2 = require('./customsDeclarations2')

describe('custom forms - find count of yeses', () => {
    it('should return 11', () => {
       const input = `abc

a
b
c

ab
ac

a
a
a
a

b`;
       expect(customsDeclarations(input)).toBe(11);
    });

    it('should return', () => {
        fs.readFile('day-6/input.txt', 'utf8', (err, data) => {
            if (err) {
                return console.log(err);
            }
            expect(customsDeclarations(data)).toBe(6703);
        });
    });
});

describe('custom forms - find questions which people said yes to', () => {
    it('should return 6', () => {
        const input = `abc

a
b
c

ab
ac

a
a
a
a

b`;
        expect(customsDeclarations2(input)).toBe(6);
    });

    it('should return', () => {
        fs.readFile('day-6/input.txt', 'utf8', (err, data) => {
            if (err) {
                return console.log(err);
            }
            expect(customsDeclarations2(data)).toBe(6703);
        });
    });
});