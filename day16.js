// function riskyOperation() {
//     throw new Error("amey yr")
// }

// try {
//     const result = riskyOperation();
//     console.log(result);
//     console.log("actually yeh execute nai hone wala");
    
// } catch(error) {
//     console.log("something went wrong :(", error.message);
// } finally {
//     console.log("always gets executed");
// }

// q3.
function withdraw(balance, amount) {
    if(amount > balance) {
        throw new Error("broke ahh lol");
    }
    return balance-amount;
}

// try {
//     const res = withdraw(500, 50);
//     console.log(res);
    
// } catch(error) {
//     withdraw(50, 500);
// } finally {
//     console.log("always runs");
// }

// q4
class validationError extends Error {
    constructor(msg) {
        super(msg);
        this.name = "validation error";
    }
}

function registerUser(age) {
    if(age < 18) {
        throw new validationError("not old enough :/");
    } else return "registered :)"
}

try {
    const res = registerUser(16);
    console.log(res);
} catch(error) {
    if(error.name === "validationError") {
        console.log(error.message);
    } else {
        console.log(error.message);
        
    }
}

// q5.
async function fetchData() {
    throw new Error("network failed");
}

async function run() {
    try {
        await fetchData();
    } catch(error) {
        console.log(error.message);
    }
}

run();