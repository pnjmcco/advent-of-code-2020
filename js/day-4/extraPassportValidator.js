const exportPassportValidator = (input) => {
  const mandatory = ['byr', 'iyr', 'eyr', 'hgt', 'hcl', 'ecl', 'pid'];
  const passports = input.split('\n\n');
  const newPassports = [];
  let count = 0;
  passports.forEach((passport) => {
    if (mandatory.every((field) => passport.includes(field))) {
      newPassports.push(passport);
    }
  });
  newPassports.forEach((passport) => {
    const fields = passport
      .split('\n')
      .join(' ')
      .split(' ')
      .reduce((keys, entry) => {
        const [, field, value] = /(\w+):(.*)/.exec(entry);

        keys[field] = value;

        return keys;
      }, {});

    const birthYear = +/(\d{4})/.exec(fields.byr)[1];
    const issueYear = +/(\d{4})/.exec(fields.iyr)[1];
    const expirationYear = +/(\d{4})/.exec(fields.eyr)[1];
    const [, height, heightUnit] = fields.hgt.match(/(\d+)(cm|in)?/);
    const hairColor = fields.hcl;
    const eyeColor = fields.ecl;
    const passportId = fields.pid;

    if (birthYear >= 1920 && birthYear <= 2002
          && issueYear >= 2010 && issueYear <= 2020
          && expirationYear >= 2020 && expirationYear <= 2030
          && (
            (heightUnit === 'cm' && +height >= 150 && +height <= 193)
              || (heightUnit === 'in' && +height >= 59 && +height <= 76)
          )
          && /#[a-f0-9]{6}/.test(hairColor)
          && /(amb|blu|brn|gry|grn|hzl|oth)/.test(eyeColor)
          && /^\d{9}$/.test(passportId)) {
      count += 1;
    }
  });
  return count;
};

module.exports = exportPassportValidator;
