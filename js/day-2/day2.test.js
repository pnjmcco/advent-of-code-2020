const fs = require('fs');
const validPasswords = require('./validPasswords');
const validPosition = require('./validPosition');

describe('Count how many passwords are valid based on character count', () => {
  it('should return 2', () => {
    const input = `1-3 a: abcde
1-3 b: cdefg
2-9 c: ccccccccc`;
    expect(validPasswords(input)).toBe(2);
  });

  it('should return 422', () => {
    fs.readFile('day-2/input.txt', 'utf8', (err, data) => {
      if (err) {
        return console.log(err);
      }
      expect(validPasswords(data)).toBe(422);
    });
  });
});

describe('Count how many passwords are valid based on character position', () => {
  it('should return 1', () => {
    const input = `1-3 a: abcde
1-3 b: cdefg
2-9 c: ccccccccc`;
    expect(validPosition(input)).toBe(1);
  });

  it('should return ', () => {
    fs.readFile('day-2/input.txt', 'utf8', (err, data) => {
      if (err) {
        return console.log(err);
      }
      expect(validPosition(data)).toBe(451);
    });
  });
});
