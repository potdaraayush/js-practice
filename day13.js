const person = {
    name: "yush",
    greet: function() {
        console.log(this.name);
    }
};

person.greet();
//.this here maps to the name defined in the object.
const greetFn = person.greet;
greetFn();
// .this value depends on where its being called. it doesnt belong to an
// object per se. here, greetFn calls .greet, but greetFn is in the global
// scope. /this for gobal is undefined. therefore, undefined is returned


const fixedGreetFn = person.greet.bind(person);
fixedGreetFn();

// 3.
function introduce(city, country) {
    console.log(`hi, im ${this.name} from ${city}, ${country}`);
}
const user = {name: "yush"};
introduce.apply(user, ["hyderabad", "india"]);
introduce.call(user, "hyderabad", "india");

// q5.
const obj = {
    name: "charlie",
    greet: () => {
        console.log(this.name);
    }
}

obj.greet();