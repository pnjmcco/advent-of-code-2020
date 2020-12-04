const fs = require('fs');
const seatId = require('./seatId');
const missingSeat = require('./missingSeat');

describe('calculate max seat id', () => {
  it('should return 820', () => {
    const input = `BFFFBBFRRR
        FFFBBBFRRR
        BBFFBBFRLL`;
    expect(seatId(input)).toBe(820);
  });

  it('should return 922', () => {
    fs.readFile('day-5/input.txt', 'utf8', (err, data) => {
      if (err) {
        return console.log(err);
      }
      expect(seatId(data)).toBe(922);
    });
  });
});

describe('find the seat missing should return 747', () => {
  fs.readFile('day-5/input.txt', 'utf8', (err, data) => {
    if (err) {
      return console.log(err);
    }
    expect(missingSeat(data)).toBe(747);
  });
});
