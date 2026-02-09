// 1. print 1 to 10 using a for loop
for(let i=1; i<=10; i++) console.log(i);
console.log('------------------');

//2.
const numbers = [2, 4, 6, 8, 10];
const total = 0;
console.log(numbers.reduce((acc, curr) => acc+curr, total));
console.log('------------------');

//3. square function
function square(num) {
  return num * num;
}
console.log(square(5));
console.log('------------------');

//4.
const person = {
    name: "yush",
    age: 22,
    city: "hyderabad"
}

console.log(person.name + " is " + person.age + " years old and lives in " + person.city);
console.log('------------------');


//5. even numbers from 1 to 20.
for(let i=1; i<=20; i++) {
    if(i%2 == 0) console.log(i);
}