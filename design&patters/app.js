//basic Structure
// (function() {
//   // decler private Var and Functions

//   return {
//     // declear public var and functions
//   };
// })();

// standard module pattern
// const UICtrl = (function() {
//   let text = "hello World";
//   const changeText = function() {
//     const elment = document.querySelector("h1");
//     elment.textContent = text;
//   };

//   return {
//     callChaneText: function() {
//       changeText();
//       console.log(text);
//     }
//   };
// })();

// UICtrl.callChaneText();

// revaling Module And Pattern
const ItemCtrl = (function() {
  let data = [];

  function add(item) {
    data.push(item);
    console.log("item Added...");
  }

  function get(id) {
    return data.find(item => {
      return item.id === id;
    });
  }

  return {
    add: add,
    get: get
  };
})();

ItemCtrl.add({ id: 1, name: "gaurav" });
//console.log(ItemCtrl.get(1));
ItemCtrl.add({ id: 2, name: "saurabh" });
console.log(ItemCtrl.get(2));
// ItemCtrl.add({ id: 1, name: "gaurav" });
// console.log(ItemCtrl.get(1));
