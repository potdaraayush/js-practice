// q1.
const users = [
    {id: 1, name: "Alice"},
    {id: 2, name: "Bob"},
    {id: 3, name: "Charlie"},
]

const user = users.find(user => Number(user.id) == 2);
console.log(user);

// q2.
const nums = [10, 20, 30, 40];
const fn = (num) => num > 25;
const fn2 = (num) => num > 5;

console.log(nums.some(fn));
console.log(nums.every(fn2));

// q3.
const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce((acc, curr) => {
    return acc + curr;
}, 0);
console.log(sum);
