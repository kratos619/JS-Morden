let re;
re = /hello/;
re = /hello/i; // i = case insensitive
//re = /hello/g; // Global Search

// console.log(re);
// console.log(re.source);

// // exec() - return result in array or null

// const result = re.exec("hello world");
// console.log(result);
// console.log(result[0]);
// console.log(result.index);
// console.log(result.input);

// test() - return true of false

// const result = re.test("Hello");
// console.log(result);

// match() - return result array or null
// const str = "Hello There";
// const result = str.match(re);
// console.log(result);

// search() - Return index of first match if not found return -1

// const str = "Hello There";
// const result = str.match(re);
// console.log(result);

// replace() - Return new String with some or all matches of a pattern

const str = "Hello there";
const newStr = str.replace(re, "Hi");
console.log(newStr);
