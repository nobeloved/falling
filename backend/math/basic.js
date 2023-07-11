function add(numbers) {
    return numbers.split(',').map(x => parseInt(x)).reduce((x1, x2) => x1 + x2);
}

function subtract(numbers) {
    return numbers.split(',').map(x => parseInt(x)).reduce((x1, x2) => x1 - x2);
}

exports.add = add;
exports.subtract = subtract;