// trick interview question 
// console.log("1");

// setTimeout(() => console.log("2", 0));

// Promise.resolve().then(() => {
//     console.log("3");
// })

// Promise.resolve().then(() => {
//     console.log("4");
// })

// console.log("5");
// output: 1 5 3 4 2.

// q1.
// console.log("A");
// setTimeout(() => {
//     console.log("B");
// }, 0);

// Promise.resolve().then(() => {
//     console.log("C");
// })

// console.log("D");
// output : A D C B

// q2.
// setTimeout(() => console.log("1"), 0);

// Promise.resolve().then(() => console.log("2"));
// Promise.resolve().then(() => console.log("3"));

// console.log("4");
// output: 4 2 3 1

// q3.
// console.log("sync");
// setTimeout(() => {
//     console.log("macrotask");
// }, 2000);
// Promise.resolve().then(() => {
//     console.log("microtask");
// })

// q4.
// Promise.resolve()
//     .then(() => console.log("1"))
//     .then(() => console.log("3"))
//     .then(() => console.log("2"));

// q5.
console.log("start");
setTimeout(() => console.log("timeout"));

Promise.resolve().then(() => {
    console.log("promise 1");
}).then(() => {
    console.log("promise 2");
});

console.log("end");
