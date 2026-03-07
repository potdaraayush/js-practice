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
