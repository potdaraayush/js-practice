// function asyncMultiplier(num) {
//     return new Promise((resolve, reject) => {
//         if(num > 0) {
//             setTimeout(()=>{
//                 resolve(num*2);
//             }, 1000);
//         } else {
//             reject("-ve numbers not allowed babu");
//         }
//     })
// }

// async function run() {
//     try {
//         // let res = await asyncMultiplier(5);
//         // console.log(res);
//         // let res2 = await asyncMultiplier(-3);
//         // console.log(res2);

//         //q3
//         // const a = await asyncMultiplier(5);
//         // const b = await asyncMultiplier(3);
//         // console.log(a, b);

//         const [a, b] = await Promise.all([
//             asyncMultiplier(5), 
//             asyncMultiplier(3)
//         ]);

//         console.log(a, b);
        
        
//     } catch(error) {
//         console.error(error);
//     }
    
// }

// run();


// // const [a, b] = await Promise.all([
// //     multiplyAsync(5),
// //     multiplyAsync(3)
// // ])

//q4 : build a fake api call.
function fakeAPI(data) {
    return new Promise((response, reject) => {
        setTimeout(() => {
            response("Server Response: "+data);
        }, 1000)
    })
}

async function callFakeAPI() {
    let result = await fakeAPI("server said hello");
    console.log(result);   
}

callFakeAPI();