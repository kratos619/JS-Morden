//Bultin counstrunctors
// strings

const name1 = "jeff";
const name2 = new String("jeff");
console.log(name1);
//name2.foo = alert("hi");

console.log(typeof name2);

if (name2 == "jeff") {
  console.log("yes");
} else {
  console.log("no");
}

// number
const num1 = 5;
const num2 = new Number(5);

console.log(num1);
console.log(num2);

// boolen
const bool1 = true;
const bool2 = new Boolean(true);

console.log(bool1);
console.log(bool2);

// functions

const getSum1 = function(x, y) {
  return x + y;
};

const getSum2 = new Function("x", "y", "return x + y");

//console.log(getSum2(12, 43));

//Objects

const john = {
  name: "john"
};
const john2 = new Object({ name: "John" });
//console.log(john2);
// array

const arr1 = [1, 2, 3, 4];
const arr2 = new Array(1, 2, 3, 4);
//
// regular expression

const rel = /\w+/;
const re2 = new RegExp("\\w+");

console.log(re2);
