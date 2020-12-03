const parsePassword = require('./parsePassword');

function isPasswordValid(password) {
  const regex = new RegExp(password.policy.char, 'g');
  const indices = [...password.password.matchAll(regex)].map((a) => a.index);
  if (!indices.includes(password.policy.min) && !indices.includes(password.policy.max)) {
    return false;
  } return !(indices.includes(password.policy.min) && indices.includes(password.policy.max));
}

const validPosition = (input) => {
  const array = input.toString().split('\n');
  let count = 0;
  array.forEach((password) => {
    const parsedPassword = parsePassword(password);
    if (isPasswordValid(parsedPassword)) {
      count += 1;
    }
  });

  return count;
};

module.exports = validPosition;
