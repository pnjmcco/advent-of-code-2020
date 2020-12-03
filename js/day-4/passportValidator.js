const passportValidator = (input) => {
  const mandatory = ['byr', 'iyr', 'eyr', 'hgt', 'hcl', 'ecl', 'pid'];
  const passports = input.split('\n\n');
  let count = 0;
  passports.forEach((passport) => {
    if (mandatory.every((field) => passport.includes(field))) {
      count += 1;
    }
  });
  return count;
};

module.exports = passportValidator;
