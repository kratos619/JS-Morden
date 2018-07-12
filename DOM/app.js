//Local Storage And Session start
// localStorage.setItem("name", "jhon");

// set  Session storage Item
//sessionStorage.setItem("name", "jhon");

// remove from storage
// localStorage.removeItem("name");
// sessionStorage.removeItem("name");

// get data from storage
// const name = localStorage.getItem("name");
// console.log(name);
// // clear localstorage
// localStorage.clear(name);

document.getSelection("from").addEventListener("submit", function(e) {
  const task = document.getElementById("task").value;
  console.log(task);
  e.preventDefault();
});
