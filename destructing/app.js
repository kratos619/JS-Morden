// maps = key-value pairs can use any type as key or value

const map1 = new Map();

//set Key
const key1 = "some String",
  key2 = {},
  key3 = function() {};

map1.set(key1, "value ofkye one");
map1.set(key2, "value ofkye keytwo");
map1.set(key3, "value ofkye keythree");

// get Values by key

// console.log(map1.get(key1));
// console.log(map1.get(key2));
// console.log(map1.get(key3));

// // count values
// console.log(map1.size);

//ITERATING MAPS

// Lop using for ... of to get kyes And Values

// for (let [key, value] of map1) {
//   console.log(key + " " + value);
// }

// Iterates Keys On;ly

// for (let key of map1.keys()) {
//   console.log(key);
// }

// loop with foreach

// map1.forEach(function(value, key) {
//   console.log(key + " " + value);
// });

// convert to array

// create an arae of the key value pair
// const keyValArr = Array.from(map1);
// console.log(keyValArr);

// crate array of values

// const valarr = Array.from(map1.values());
// console.log(valarr);
