// //1. delayed multiplier
// //3. add error handling
// function multiplyAsync(num) {
//     return new Promise((res, rej) => {
//         if(num < 0) rej("-ve numbers are not allowed.");
//         else {setTimeout(() => {
//             res(num*2);
//         }, 1000);}
//     })
// }

// multiplyAsync(-10)
// .then(result => {
//     return multiplyAsync(result);
// })
// .then(result => {
//     return multiplyAsync(result);
// })
// //2. chain multiplyAsync thrice and log the final result
// .then(result => {
//     console.log(result);
// })
// .catch(error => {
//     console.log(error);
// })

//4. rewrite multiplyAsync using arrow function syntax
let multiplyAsync = (num) => {
    return new Promise((res, rej) => {
        if(num < 0) {
            rej("-ve numbers not allowed babu");
        } else {
            setTimeout(() => {
                res(num*2);
            }, 1000);
        }
    })
}

multiplyAsync(-4)
.then(multiplyAsync)
.then(multiplyAsync)
.then(console.log)
.catch(console.error)