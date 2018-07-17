// Iterator Example
// function nameIterator() {
//   let nextIndex = 0;
//   return {
//     next: function() {
//       return nextIndex < name.length
//         ? { value: name[nextIndex++], done: false }
//         : { done: true };
//     }
//   };
// }

// //crete namearray

// const numArray = ["Jack", "Jill", "John"];

// const name = nameIterator(numArray);

// console.log(name.next());

//Genrator

// function* sayNames() {
//   yield "Jack";
//   yield "Jill";
//   yield "john";
// }

// const name = sayNames();

// console.log(name.next().value);
// console.log(name.next().value);
// console.log(name.next().value);

// ID Creator

function* createId() {
  let index = 100;
  while (true) {
    yield index++;
  }
}

const gen = createId();

console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
