// q5
import {add, PI} from './mathUtils.js';
import sub from "./mathUtils.js";

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


// q4
function display({name, city = "unknown"}) {
    console.log(`${name} lives in ${city}`);
}

display({name: "yush"});

// q5
console.log(add(3, 5)+PI);
console.log(sub(6, 7));

