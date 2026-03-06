let total = 0;
function add(num) {
    total+=num;
    return total;
}
// console.log(add(5));

function pureAdd(num1, num2) {
    return num1+num2;
}
// console.log(pureAdd(5, 10));

// q2. immutability 
const user = {
    name: "alice",
    age: 25
};
const newUser = {...user, age: user.age+1}
// console.log(newUser);

// q3. higher order functions
function operate(a, b, operation) {
    return operation(a, b);
}

function operation(x, y) {
    return x+y;
}

// console.log(operate(5, 4, operation));

// q4. currying
function multiply(a, b) {
    return a*b;
}

function curriedMultiplication(a) {
    return function(b) {
        return a*b;
    }
}

// console.log(curriedMultiplication(5)(2));

// q5.
function double(x) {
    return x*2;
}

function square(x) {
    return x*x;
}

function compose(double, square) {
    return function(x) {
        return double(square(x));
    }
}

const res = compose(double, square);
console.log(res(6));

