// sets - store unique values of any types

const set1 = new Set();

// add Values to set

set1.add(100);
set1.add("A string");
set1.add({ name: "john" });
set1.add(true);
set1.add(100);

const set2 = new Set([1, true, "string"]);

// console.log(set2);

// // Get Count
// console.log(set1.size);

// // check for values

// console.log(set1.has(100));
// console.log(set1.has(50 + 50 + 50));

//console.log({ name: "john" } === { name: "john" });

// Delete From Set

set1.delete(100);
//console.log(set1);

// Iteraing Through sets

for (let item of set1) {
  console.log(item);
}
