var operations = {
    '+': function (num1, num2) {
        return num1 + num2
    },
    '/': function (num1, num2) {
        return num1 / num2
    },
    '-': function (num1, num2) {
        return num1 - num2
    },
    '*': function (num1, num2) {
        return num1 * num2
    }
};

var parsedOperator = '+',
    num1 = 11, num2 = 33,
    result = 0;

result = operations[parsedOperator](num1, num2);