// // event listner
// document.querySelector(".clear-tasks").addEventListener("click", function(e) {
//   alert("hi");
//   // e.preventDefault();
// });

document.querySelector(".clear-tasks").addEventListener("click", onClick);

function onClick(e) {
  //console.log("clicked");
  e.preventDefault();
  let val;
  val = e;
  // event target
  val = e.target;
  val = e.target.id;
  val = e.target.className;
  val = e.target.classList;
  e.target.innerText = "hello";
  //event Type
  val = e.type;

  //TimeStamp
  val = e.timeStamp;

  // cord event relative to the window
  val = e.clientY;
  val = e.clientX;
  //cord relative to the element
  val = e.offsetY;
  val = e.offsetX;
  console.log(val);
}
