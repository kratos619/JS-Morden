// destructuring Assignment

// let a, b;
// [a, b] = [200, 300];
// // Rest Pattern
// [a, b, c, ...rest] = [100, 200, 300, 400, 500];

// //console.log(rest);

// ({ a, b } = { a: 100, b: 200, c: 300, d: 400, e: 500 });
// ({ a, b, ...rest } = { a: 100, b: 200, c: 300, d: 400, e: 500 });

// array Destruction
// const people = ["jhon", "Beth", " Mike"];
// const [person1, person2, person3] = people;

// console.log(person1);

//Parse Array Returned From Function

// function getPeoplr() {
//   return ["jhon", "Beth", " Mike"];
// }

// let person1, person2, person3;
// [person1, person2, person3] = getPeoplr();

// console.log(person1, person2, person3);

//Object Destructiong
const person = {
  name: "john Doe",
  age: 32,
  city: "paratwada",
  gender: "male",
  sayHello: function() {
    console.log("hi");
  }
};

//old Es5

// const name = person.name,
//   age = person.age,
//   city = person.city;

// new ES6 Destructuring
const { name, age, city, sayHello } = person;
console.log(name, age, city);
sayHello();
