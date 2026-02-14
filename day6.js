// 1.
// function getData() {
//     const np = new Promise((res, rej) => {
//     let x = Math.random();
//     if(x > 0.5) {
//         setTimeout(() => {
//             res("data received.")
//         }, 1000);
//     } else {
//         rej("error occurred");
//     }
//     })
//     return np;
// }
// getData()
// .then(result => {
//     console.log(result);
// })
// .catch(err => {
//     console.log(err);
// });

//2.
setTimeout(() => {
    console.log("timeout");
}, 0);
Promise.resolve().then(() => {
    console.log("promise");
});
console.log("sync");

// output : sync, promise, timeout