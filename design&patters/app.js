//basic Structure
// (function() {
//   // decler private Var and Functions

//   return {
//     // declear public var and functions
//   };
// })();

// standard module pattern
const UICtrl = (function() {
  let text = "hello World";
  const changeText = function() {
    const elment = document.querySelector("h1");
    elment.textContent = text;
  };

  return {
    callChaneText: function() {
      changeText();
      console.log(text);
    }
  };
})();

UICtrl.callChaneText();
