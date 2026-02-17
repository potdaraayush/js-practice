function wait(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function taskA() {
    await wait(1000);
    console.log("A done");
    return "A";
}

async function taskB() {
    await wait(1000);
    console.log("B done");
    return "B";
}

const a = await taskA();
const b = await taskB();

console.log(a, b);
