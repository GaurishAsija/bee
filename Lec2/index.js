function sum(a, b) {
    return a + b;
}
function subtract(a, b) {
    return a - b;
}
module.exports = {
    sum,                
    subtract
};
module.exports.add = sum; // Adding an alias for sum
module.exports.subtract = subtract; // Exporting subtract function


