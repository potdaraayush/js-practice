// 1.debouncing
function debounce(fn, delay) {
    let timer;

    return function(...args) {
        clearTimeout(timer);

        timer = setTimeout(() => {
            fn(...args);
        }, delay);
    }
}

function add(a, b) {
    console.log(a+b);
}

let res = debounce(add, 3000);
// console.log(res(4, 5));

// q2. throttle
function throttle(fn, delay) {
    let lastCall = 0;

    return function(...args) {
        const now = Date.now();
        if(now - lastCall >= delay) {
            lastCall = now;
            fn(...args);
        }
    }
}

const res2 = throttle(add, 3000);
// console.log(res2(4, 5));


// 3. memoization
function memoize(fn) {
    const cache = {};

    return function(n) {
        if(cache[n]) {
            cache[n];
        }

        const res = fn(n);
        cache[n] = res;
        return res;
    }
}

function square(n) {
    return n*n;
}

const res3 = memoize(square);
// console.log(res3(2));


// q4. memoize the given function
function factorial(n) {
    if(n == 0) return 1;
    return n*factorial(n-1);
}

const res4 = memoize(factorial);
console.log(res4(5));

// q5. difference between throttle and debounce.
// throttle runs atmost once during an interval.
// runs at regular intervals.

// debounce delays function execution until event stops
// runs only once after a delay.