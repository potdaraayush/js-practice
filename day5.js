// 1.
// console.log("start");

// setTimeout(() => {
//     console.log("inside timeout");
// }, 0);

// console.log("end");

//ans : start end inside timeout

//2. print hello. print world after 2 secs
// console.log("hello");
// setTimeout(() => {
//     console.log("world");
// }, 2000);


//3.
// function callback(msg) {
//     console.log(msg);
// }

// function fetchData(callback) {
//     setTimeout(() => {
//         callback("hi");
//     }, 1000);
    
// }
// fetchData(callback);

// 4. 
// function fn() {
//     setTimeout(() => {
//         console.log("step 1");
//         setTimeout(() => {
//             console.log("step 2");
//             setTimeout(() => {
//                 console.log("step 3");
//             }, 1000);
//         }, 1000);
//     }, 1000);
// }

// fn();

function getData() {
    setTimeout(() => {
        return "hello";
    }, 1000);
}

const res = getData();
console.log(res);
