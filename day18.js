let total = 0;
function add(num) {
    total+=num;
    return total;
}
// console.log(add(5));

function pureAdd(num1, num2) {
    return num1+num2;
}
// console.log(pureAdd(5, 10));

// q2. immutability 
const user = {
    name: "alice",
    age: 25
};
const newUser = {...user, age: user.age+1}
// console.log(newUser);

// q3. higher order functions
