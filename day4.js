//1. numbers greater than 10 using filter()
const numbers = [5, 12, 8, 20, 3, 15];

let newArray = numbers.filter(function(num) {
    if(num > 10) return num;
});
console.log(newArray);
console.log("-------------------------");


//2. find sum using reduce.
let res = numbers.reduce((acc, curr) => {
    return acc+curr;
}, 0);
console.log(res);
console.log("-------------------------");

//3. finding maximum using reduce
let ans = numbers.reduce((acc, curr) => {
    if(curr > acc) acc = curr;
    return acc;
}, numbers[0]);
console.log(ans);
console.log("-------------------------");

//4. understanding functions as values
function add(a, b) {
    return a+b;
}
function operate(a, b, add) {
    var sum = add(a, b);
    return sum;
}
let x = operate(10, 20, add);
console.log(x);
console.log("-------------------------");

//5. difference between .map() and forEach();
console.log(numbers.map(num => num*2));
// a. returns a new array.
// b. each element is the return value of the callback function
// c/ used to transform data.
console.log("-------------------------");

console.log(numbers.forEach(num => num*2));
// a. returns undefined.
// b. used to manage side effects.
// c. doesnt create a new array

