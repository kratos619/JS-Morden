//query SSelectors
// console.log(document.querySelector('#task-title'));
// console.log(document.querySelector('.card-title'));
// console.log(document.querySelector('h5'));
// document.querySelector('li').style.color='red';
// document.querySelector('li:last-child').style.color='red';

//document.getElementsByClassName
// const items = document.getElementsByClassName('collection-item');
// console.log(items);
// console.log(items[0]);
// items[0].style.color = 'red';
// items[4].style.color = 'red';


// const listItems = document.querySelector('ul').getElementsByClassName('collection-item');
// console.log(listItems);

//query SSelectorsAll

const items = document.querySelectorAll('ul.collection li.collection-item');

items.forEach(function(item,index){
    //console.log(item.className);
    item.textContent = `${index}: Hello`;
});

console.log(items);

