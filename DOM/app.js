//Replace Element
const newHeading = document.createElement("h2");
//add id
newHeading.id = "task-title";
//new Task node
newHeading.appendChild(document.createTextNode("Task Lisst"));
// get old heading
const oldHeading = document.getElementById("task-title");
// Parent
const cardaction = document.querySelector(".card-action");
//replace
cardaction.replaceChild(newHeading, oldHeading);
// remove element
const lis = document.querySelectorAll("li");
const list = document.querySelector("ul");
//remove list item
lis[0].remove();
// remove child Element
list.removeChild(lis[3]);
//console.log(newHeading);

// class and after
const firstLi = document.querySelector("li:first-child");
const link = firstLi.children[0];

let val;

val = link.className;
val = link.classList;
link.classList.add("testr");
val = link;
link.classList.remove("testr");
//attributes
val = link.getAttribute("href");
val = link.setAttribute("href", "http://google.com");
link.setAttribute("title", "google");
val = link.hasAttribute("title");
link.removeAttribute("title");
val = link;
console.log(val);
