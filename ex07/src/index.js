const range = {
    max: 100.00,
    min: -25.00,
    num1: 17.50,
    num2: 88.80,
    average: 45.325
};
middle = (range) => {
    middle = (range) = (range.max + range.min) / 2.00;
    return range;
}
console.log(middle(range));
module.exports = middle;