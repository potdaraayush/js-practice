async function wait(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function task1() {
    await wait(1000);
    return 1;
}

async function task2() {
    if(Math.random() > 0.5) {
        throw new Error(message = "math.random gave an error brev");
    }
    await wait(1000);
    return 2;
}

async function task3() {
    await wait(1000);
    return 3;
}

// q1
async function run() {
//     const res1 = await task1();
//     console.log(res1);
    
//     const res2 = await task2();
//     console.log(res2);

//     const res3 = await task3();
//     console.log(res3);

// q2
//    const [a, b, c] = await Promise.all([task1(), task2(), task3()]);
//    console.log(a, b, c);

// q3 : modify task2 to sometimes throw and error. write async run that calls 3 tasks sequentially w try and catch, ensure errors are caught and execution continues for remaining tasks
    // try {
    //     const res1 = await task1();
    //     console.log(res1);
    // } catch {}

    // try {
    //     const res2 = await task2();
    //     console.log(res2);
    // } catch(err) {
    //     console.log(err.message);
    // }

    // try {
    //     const res3 = await task3();
    //     console.log(res3);
    // } catch {

    // }
}
// run();

async function multiplyBy2(num) {
    return num*2;
}

async function add5(num) {
    return num+5;
}

async function exe() {
    const x = await multiplyBy2(10);
    const y = await add5(x);
    const result = await multiplyBy2(y);
    console.log(result);
}

// exe();

async function backgroundTask(num) {
    await wait(500);
    if(num < 0) throw new Error(message = "-ve number.");
    console.log("processed", num);
}

function execute() {
    try {
        backgroundTask(10);
    } catch {}

    try {
        backgroundTask(-10).catch(err => console.log(err.message));
    } catch {}
}

execute();