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

// q4.
const arr = [1, 2, [[3, 4], [5, 6]]];
console.log(arr.flat(2));

const words = ["hello js", "js is fun"];
const newWords = words.flatMap((x) => x.split(" "));
console.log(newWords);


// q5.
const orders = [
    {id: 1, "amount": 100},
    {id: 2, "amount": 200},
    {id: 3, "amount": 150}
]

// 5a.
const revenue = orders.reduce((acc, curr) => {
    return acc+curr.amount;
}, 0);
console.log(revenue);

// 5b.
const idArray = orders.filter(order => order.amount > 120).map(order => order.id);
console.log(idArray);

// 5c.
const ans = orders.some(order => order.amount < 100);
console.log(ans);
