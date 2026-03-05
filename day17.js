// q1.
const arr = [10, 20, 30];
const iter = arr[Symbol.iterator]();
// console.log(iter.next());
// console.log(iter.next());
// console.log(iter.next());

// q2.
const counter = {
    [Symbol.iterator]() {
        let cnt = 1;
        return {
            next() {
                return {
                    value: cnt++,
                    done: false
                }
            }
        }
    }
}

const i = counter[Symbol.iterator]();
// console.log(i.next());
// console.log(i.next());
// console.log(i.next());

// q3.
function* numberGen() {
    yield 1;
    yield 2;
    yield 3;
}

const gen = numberGen();
// console.log(gen.next());
// console.log(gen.next());
// console.log(gen.next());

// q4.
function* nums() {
    yield 10;
    yield 20;
    yield 30;
}

// for(const n of nums()) {
//     console.log(n);
// }

// q5.
function* infiniteGenerator() {
    let i = 1;
    while(true) yield i++;
}

for(const id of infiniteGenerator()) console.log(id);
