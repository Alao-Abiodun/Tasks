// IIFE Function
const sumOfAnyValuesA = ((...args) => {
    let sum = 0;
    for (let i of args) {
        sum += i;
    }
    return sum;
})(1, 23, 45);

console.log('IIFE:', sumOfAnyValuesA)


// Function Declaration
function sumOfAnyValuesB() {
    let sum = 0;
    for (let i of arguments) {
        sum += i;
    }
    return sum;
}


console.log('Function Declaration: ',sumOfAnyValuesB(1,23,45))

// Function Expression
const sumOfAnyValuesC = function (...args) {
    let sum = 0;
    for (let i of args) {
        sum += i;
    }
    return sum;
}


console.log('Function Expression: ',sumOfAnyValuesC(1,23,45))