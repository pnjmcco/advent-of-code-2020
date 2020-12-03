const parsePassword = require('./parsePassword');

function isPasswordValid(password) {
  const regex = new RegExp(password.policy.char, 'g');
  const count = (password.password.match(regex) || []).length;
  return !(count < password.policy.min || count > password.policy.max);
}
const validPasswords = (input) => {
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

module.exports = validPasswords;
