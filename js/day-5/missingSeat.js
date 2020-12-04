const missingSeat = (input) => {
  const seatIds = input.split('\n').map((line) => {
    const binary = line.replace(/F|L/g, 0).replace(/B|R/g, 1);
    return parseInt(binary, 2);
  });
  let missingSeatNo = 0;
  // eslint-disable-next-line no-plusplus
  for (missingSeatNo; missingSeatNo < seatIds.length; missingSeatNo++) {
    const seatAbove = missingSeatNo + 1;
    const seatBelow = missingSeatNo - 1;
    if (seatIds.includes(seatAbove)) {
      if (seatIds.includes(seatBelow)) {
        if (!seatIds.includes(missingSeatNo)) {
          break;
        }
      }
    }
  }

  return missingSeatNo;
};

module.exports = missingSeat;
