// 1.
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        console.log(`hi, im ${this.name} and im ${this.age} years old`);
    }

    // q2
    haveBirthday() {
        this.age = this.age+1;
        console.log(this.age);
        
    }
}

Person.species = function() {
    return "homo sapiens";
}

const p1 = new Person("alice", 25);
p1.greet();
p1.haveBirthday();
p1.haveBirthday();

// q3
class Student extends Person {
    constructor(name, age, grade) {
        super(name, age);
        this.grade = grade;
    }

    study() {
        console.log(`${this.name} is studying and thats why his grade is ${this.grade}.`);
    }
}

s1 = new Student("yush", 22, "A");
s1.greet();
s1.study();

// q4
function Animal(name) {
    this.name = name;
}

Animal.prototype.speak = function() {
    console.log("im a dog and my name is: "+this.name);
}

const dog = new Animal("kamedi");

dog.speak();
console.log(Person.species());