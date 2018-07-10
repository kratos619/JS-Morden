let row ;
let col;
const parentElementRow = document.querySelector('div.row');
const chileElement = document.querySelector('div.col-md-6');

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

numberofchildElementofrow = parentElementRow.childElementCount;
console.log(numberofchildElementofrow);
if(numberofchildElementofrow >= 2){
    row = parentElementRow.parentElement;
    console.log(row);
    row =  document.createElement('div');
    console.log('div Created');
    console.log(row);
}