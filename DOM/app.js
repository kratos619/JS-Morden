let val;
const list = document.querySelector('ul.collection');
const listItem = document.querySelector('li.collection-item:first-child');

val = listItem;
val = list;

// get child node

val = list.childNodes;
val = list.childNodes[0];
val = list.children;
val = list.childNodes[0].nodeName;
val = list.childNodes[1].nodeType;


// get children element Node
val = list.children;
val  = list.children[1];
val  = list.children[1].textContent = "hi";

// Children of children
list.children[3].children[0].id = 'test-link';
val = list.children[3].children[0];

// first child 
val = list.firstChild;
val  = list.firstElementChild;

// lst child

val = list.lastChild;
val = list.lastElementChild;

// count child element
val = list.childElementCount;

// get parent Node
val = listItem.parentElement;

val = listItem.parentNode;

val = listItem.parentElement.parentElement;

// get next sibling
val = listItem.nextSibling;

console.log(val);