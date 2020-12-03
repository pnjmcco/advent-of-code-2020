const treeCounter = (input, xSpeed, ySpeed) => {
  // const xSpeed = 3;
  // const ySpeed = 1;

  const map = input.split('\n');

  let x = 0;
  let y = 0;
  let count = 0;
  const lineLength = map[0].length;
  while (y < map.length) {
    const whereIAm = map[y][x];
    if (whereIAm === '#') {
      count += 1;
    }

    x = (x + xSpeed) % lineLength;
    y += ySpeed;
  }

  return count;
};

module.exports = treeCounter;
