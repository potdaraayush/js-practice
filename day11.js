//objects and destructuring
const person = {
    "name" : "yush",
    "age": 22,
    "city": "hyderabad"
}

// console.log(person.name, person.age);
// console.log(person["city"]);

const student = {
    "name": "yush",
    grades: {
        "math": 99,
        "science": 85
    }
};
// console.log(student["grades"]["math"]);
// console.log(student.grades.science);

const {name, grades: {math, science}} = student;
// console.log(name);
// console.log(science);
// console.log(math);

// q4
function greet({name, age, city}) {
    console.log(name, age, city);
}

// greet(person);

// q5
const dynamicObj = {
    key : 100,
    sayHello() {
        return "hello";
    }
}
const key = "score";
dynamicObj[key] = 100;
console.log(dynamicObj.score);
console.log(dynamicObj.sayHello());


