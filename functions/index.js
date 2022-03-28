// IIFE Function
// const sumOfAnyValuesA = ((...args) => {
//     let sum = 0;
//     for (let i of args) {
//         sum += i;
//     }
//     return sum;
// })(1, 23, 45);

// console.log('IIFE:', sumOfAnyValuesA)


// // Function Declaration
// function sumOfAnyValuesB() {
//     let sum = 0;
//     for (let i of arguments) {
//         sum += i;
//     }
//     return sum;
// }


// console.log('Function Declaration: ',sumOfAnyValuesB(1,23,45))

// Function Expression
const sumOfAnyValuesC = function (...args) {
    let sum = 0;
    if (typeof args === 'number') {
        for (let i of args) {
            sum += i;
        }
        return sum;
    } else {
        return new Error('Arguments must be numbers');
    }
}


console.log('Function Expression: ',sumOfAnyValuesC(1,23,45))
console.log('Function Expression: ',sumOfAnyValuesC(1, '2', '4', 5))
console.log('Function Expression: ',sumOfAnyValuesC('this is a random string', 4, '6'));


// function foo(bar) {
//     bar();
// }

// foo(function(){
//     console.log('bar');
// });

// function orderPizza(type, name, callback) {
//     console.log('Pizza ordered...');
//     console.log('Pizza is for preparation');
//     setTimeout(function () {
//         let msg = `Your ${type} ${name} Pizza is ready! The total bill is $13`;
//         callback(msg);
//     }, 3000);
// }

// orderPizza('Veg', 'Cheese Barbeque', function(message){
// 	console.log(message);
// });

