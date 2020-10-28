import { Person } from "./person"; // Named export
import Teacher from "./teacher"; // Default export

//======= this, binding, scope ======//
const person = {
  name: "Mosh",
  walk() {
    console.log(this);
  },
  talk() {
    setTimeout(function() {
      console.log("this", this);
    }, 1000);
  },
  talkWithSelf() {
    var self = this;
    setTimeout(function() {
      console.log("self", self);
    }, 1000);
  },
  talkWithSelfArrow() {
    setTimeout(() => {
      console.log("this", this);
    }, 1000);
  }
};

person.walk();
const walk = person.walk.bind(person);
walk();

person.talk();
person.talkWithSelf();
person.talkWithSelfArrow();

//======= arrow functions ======//
const square = number => number * number;
console.log(square(5));

//======= map, filter ======//
const jobs = [
  { id: 1, isActive: true },
  { id: 2, isActive: true },
  { id: 3, isActive: false }
];
const activeJobs = jobs.filter(job => job.isActive); // jobs.filter(function(job) { return job.isActive; });
console.log(activeJobs);

const colors = ["red", "blue", "green"];
const items = colors.map(color => `<li>${color}</li>`);
console.log(items);
//Could have written out the function and manually concatenated, but look how much cleaner this looks!

//======= classes, inheritance, modules ======//
const p = new Person("Sammy");
p.walk();

const t = new Teacher("Sammy", "BS");
t.walk();
t.teach();

//======= Other topics skipped over here: Destructuring, Spread Operator, reduce ======//
