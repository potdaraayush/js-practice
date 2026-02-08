//q1
myAge = 22;
isAdult = false;

if(myAge > 18) isAdult = true;

console.log(isAdult);

//q2 
firstName = "Aayush";
lastName = "Potdar";
fullName = firstName + " " + lastName;

console.log(fullName);

//q3
function greet(name) {
    console.log("sup, " + name);
}
greet("yush!");

//q4
fruits = ["apple", "banana", "mango"];
fruits.push("orange");
console.log(fruits);

//q5
function isEven(n) {
    if(n%2 == 0) return true;
    return false;
}
console.log(isEven(3));