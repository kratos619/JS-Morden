const data = [
  {
    name: "John Doe",
    age: 23,
    gender: "male",
    lookinffor: "female",
    image: ""
  },
  {
    name: "Saurabh pal",
    age: 23,
    gender: "male",
    lookinffor: "female",
    image: ""
  },
  {
    name: "sakhi w",
    age: 23,
    gender: "female",
    lookinffor: "male",
    image: ""
  },
  {
    name: "subrbhi Joshi",
    age: 23,
    gender: "female",
    lookinffor: "male",
    image: ""
  },
  {
    name: "Shivani Sarma",
    age: 23,
    gender: "female",
    lookinffor: "male",
    image: ""
  }
];

const profiles = profileIterator(data);
//agin dispaly
nextProfileDisplay();
// next events
document.getElementById("next").addEventListener("click", nextProfileDisplay);

function nextProfileDisplay() {
  const currentProfile = profiles.next().value;
  if (currentProfile !== undefined) {
    document.getElementById("profileDisplay").innerHTML = `
    <ul class="list-group">
    <li class="list-group-item">${currentProfile.name}</li>
    <li class="list-group-item">${currentProfile.age}</li>
    <li class="list-group-item">${currentProfile.gender}</li>
    <li class="list-group-item">${currentProfile.lookinffor}</li>
    </ul>`;

    document.getElementById("imageDisplay").innerHTML = `<img src=${
      currentProfile.image
    } />`;
  } else {
    window.location.reload();
  }
}

// profile tierator function

function profileIterator(profiles) {
  let nextIndex = 0;
  return {
    next: function() {
      return nextIndex < profiles.length
        ? { value: profiles[nextIndex++], done: false }
        : { done: true };
    }
  };
}
