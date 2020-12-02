const parsePassword = require('./parsePassword');

const validPasswords = (input) => {
    let array = input.toString().split("\n");
    let count = 0
    for(i in array) {
        let parsedPassword = parsePassword(array[i]);
        if(isPasswordValid(parsedPassword)) {
            count++;
        }
    }
    return count;
}


function isPasswordValid(password) {
    let regex = new RegExp( password.policy.char, 'g' );
    let count = (password.password.match(regex) || []).length;
    console.log(`count is ${count} and the min is ${password.policy.min} and the max is ${password.policy.max}`)
    if(count < password.policy.min || count > password.policy.max) {
        return false;
    } else {
        return true;
    }
}



module.exports = validPasswords;