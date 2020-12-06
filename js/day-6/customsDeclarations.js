const customsDeclarations = (input) => {

    const groups = input.split('\n\n');
    let customsDeclarations = 0
    groups.forEach((group) => {
        let set = new Set();
        let person = group.replaceAll('\n', '').split('');
        person.forEach((yes) => {
            set.add(yes);
        });
        customsDeclarations += set.size;
    });

    return customsDeclarations;
}

module.exports = customsDeclarations;