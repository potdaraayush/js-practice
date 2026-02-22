// q1
const name = "alice";
const age = 24;

console.log("my name is "+name+" and im "+age+" years old.");
console.log(`my name is ${name} and im ${age} years old.`);

// q2
function greet(name = "guest") {
    console.log(`hello, ${name}`);
}

greet("yush");
greet();

// q3
const firstName = "Alice";
const newAge = 22;

const person = {
    firstName, newAge
};

console.log(person.firstName, person.newAge);
