//1. let vs const
let score = 10;
console.log(score);

score = 20;
console.log(score);

const maxScore = 100;
console.log(maxScore);

// maxScore = 200;
console.log(maxScore);

// 2. rewrite using arrow funcions
add = (a, b) => {return a+b;}
console.log(add(5, 10));

//3. template literals
let name = "yush";
let age = 22;
console.log(`my name is ${name} and im ${age} years old`);

//4. for each
const nums = [1, 2, 3, 4, 5];
nums.forEach(num => console.log(num));

//5. map
const newArray = nums.map(num => num*2);
console.log(newArray);