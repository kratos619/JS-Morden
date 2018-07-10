// create element
let row;
let col;
const parentElementRow = document.querySelector("div.row");
const chileElement = document.querySelector("div.col-md-6");

//geting parent element
console.log(parentElementRow);
console.log(chileElement.children);

row = parentElementRow.children;

// col = parentElementRow.childElementCount;
// //console.log(row);
// if(parentElementRow.childElementCount > 1){
//    row =  document.createElement('div');
// console.log(row);
// }
var first_row = parentElementRow.parentElement.lastElementChild;
console.log(first_row);
var new_row = parentElementRow.parentElement.lastElementChild;
numberofchildElementofrow = parentElementRow.childElementCount;
console.log(numberofchildElementofrow);
if (numberofchildElementofrow > 2) {
  var col2;
  row = document.createElement("div");
  row.className = "row";
  col = document.createElement("div");
  col.className = "col-md-6";
  col2 = document.createElement("div");
  col2.className = "col-md-6";
  console.log(col2);
  row.appendChild(col);
  row.appendChild(col2);
  console.log(row);
  col.appendChild(document.createTextNode("hi"));
  col2.appendChild(document.createTextNode("hellow"));
  document.querySelector("div.container").appendChild(row);
  console.log(row);

  //console.log(col);
}
