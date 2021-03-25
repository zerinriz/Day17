let foo = 13, boo = 45;

function main(foo, boo) {
    [foo, boo] = [45, 13]
    return { foo, boo }
}
console.log(main(foo, boo));
module.exports = main;