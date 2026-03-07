// qusetions on currying
// 1.
function curryAdd(a) {
    return function(b) {
        return a+b;
    }
}
// console.log(curryAdd(3)(2));

// q2.
// function sum(a, b, c) {
//   return a + b + c;
// }

// const curriedSum = curry(sum);

// curriedSum(1)(2)(3); 
function curryAdd(fn) {
    return function curry1(...args) {
        if(args.length >= fn.length) {
            return fn(...args);
        }

        return function (...nextArgs) {
            return curry1(...args, ...nextArgs);
        }
    }
}
function add(a, b, c) {
    return a+b+c;
}
const res = curryAdd(add);
// console.log(res(2, 3)(4))

// 4. infinite currying

function infiniteCurry(fn) {
    return function curry1(...args) {
        return function(...nextArgs) {
            if(nextArgs.length == 0) {
                return fn(...args)
            }
            return curry1(...args, ...nextArgs);
        }
    }
}

const res4 = infiniteCurry(add);
// console.log(res4(1)(2)(3)());
//  ----------------------------------------------------------------------------------
// questions on composite functions
function double(a) {
    return a*2;
}

function square(a) {
    return a*a;
}

function composite1(double, square) {
    return function(a) {
        return double(square(a));
    }
}

const ans1 = composite1(double, square);
// console.log(ans1(3));

// q2.
function inc(a) {
    return a+1;
}

function composite2(inc, square, double) {
    return function(a) {
        return square(double(inc(2)))
    }
}

const ans2 = composite2(inc, square, double);
console.log(ans2(2));

// 4. pipe
function pipe(inc, square, double) {
    return function(a) {
        return inc(square(double(a)));
    }
}

const ans4 = pipe(inc, square, double);
console.log(ans4(2));

// q5.
function add(a, b) {
    return a+b;
}

function composite5(add, square) {
    return function(a, b) {
        return square(add(a, b));
    }
}

const res5 = composite5(add, square);
console.log(res5(2, 3));
