const customsDeclarations2 = (input) => {
    const groups = input.split('\n\n');
    let customsDeclarations = 0
    groups.forEach((group) => {
        const people = group.split('\n').filter((item) => {
            return item !== '';
        }).length;
        let set = new Set(group.replaceAll('\n', ''))
        set.forEach((item) => {
            const regex = new RegExp(item, "g");
            const matches = group.match(regex);
            const matchesLength = matches.length;
            if(matchesLength === people) {
                customsDeclarations += 1;
            }
        })
    });

    return customsDeclarations;
}

module.exports = customsDeclarations2;