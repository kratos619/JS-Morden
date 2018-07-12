const form = document.querySelector("form");
const taskInput = document.getElementById("task");

// clear ip
taskInput.value = "";

//form.addEventListener("submit", runEvent);

//taskInput.addEventListener("keydown", runEvent);
//taskInput.addEventListener("keyup", runEvent);
//focus
//taskInput.addEventListener("focus", runEvent);
//blur
//taskInput.addEventListener("blur", runEvent);
//cut
//taskInput.addEventListener("cut", runEvent);
//paste
//taskInput.addEventListener("paste", runEvent);
//input
taskInput.addEventListener("input", runEvent);

function runEvent(e) {
  //e.preventDefault();

  var val;
  val = e.type;
  //val = document.querySelector("h5");
  //val.innerText = e.target.value;

  // get ip value
  //val = taskInput.value;

  console.log(val);
  //console.log();
}
