const parsePassword = require('./parsePassword');

const validPosition = (input) => {
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
    const indices = [...password.password.matchAll(regex)].map(a => a.index);
    if(!indices.includes(password.policy.min) && !indices.includes(password.policy.max)) {
        return false;
    } else return !(indices.includes(password.policy.min) && indices.includes(password.policy.max));

}

module.exports = validPosition;