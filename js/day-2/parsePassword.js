const parsePassword = (password) => {
  const parsedPassword = {
    policy: {
      min: 0,
      max: 0,
      char: '',
    },
    password: '',
  };
  const spiltPassword = password.split(':');
  parsedPassword.password = spiltPassword[1];
  const policy = spiltPassword[0];
  parsedPassword.policy.min = parseInt(policy.split(' ')[0].split('-')[0], 10);
  parsedPassword.policy.max = parseInt(policy.split(' ')[0].split('-')[1], 10);
  parsedPassword.policy.char = policy.split(' ')[1];
  return parsedPassword;
};

module.exports = parsePassword;
