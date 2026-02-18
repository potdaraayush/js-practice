function wait(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// async function taskA() {
//     await wait(1000);
//     console.log("A done");
//     return "A";
// }

// async function taskB() {
//     await wait(1000);
//     console.log("B done");
//     return "B";
// }

// q1.
// const a = await taskA();
// const b = await taskB();

// console.log(a, b);
// const [a, b] = await Promise.all([taskA(), taskB()]);
// console.log(a, b);

// q2.
// async function mightFail(num) {
//     if(num < 0) throw new Error("-ve number");
//     await wait(500);
//     return num*2;
// }

// try {
//     const res1 = await mightFail(5);
//     // const res2 = await mightFail(-2);
//     const res3 = await mightFail(100);
//     const res4 = await mightFail(10);
//     // const res5 = await mightFail(-21);
//     console.log(res1, res3, res4);
    
// } catch (err) {
//     console.log("caught error:", err.message);
    
// }

// q3
async function multiply(num) {
    return num*2;
}

async function addTen(num) {
    return num+10;
}

async function run() {
    const res = await multiply(5);
    const final = await addTen(res);

    console.log(final); 
}

run();