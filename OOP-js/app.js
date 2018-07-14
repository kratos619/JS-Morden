// Object.Proto Type
//Person.prototype
// Person constructor
function Person(firstname, lastname, dob) {
  this.firstname = firstname;
  this.lastname = lastname;
  // this.age = age;
  this.birthday = new Date(dob);
  // this.calculateAge = function() {
  //   const diff = Date.now() - this.birthday.getTime();
  //   const ageDate = new Date(diff);
  //   return Math.abs(ageDate.getUTCFullYear() - 1970);
  // };
}

const saurav = new Person("saurav", "pal", "01-05-1996");
const gaurav = new Person("gaurav", "pal", "july 1 1994");

console.log(gaurav);

// calculateAge
Person.prototype.calculateAge = function() {
  const diff = Date.now() - this.birthday.getTime();
  const ageDate = new Date(diff);
  return Math.abs(ageDate.getUTCFullYear() - 1970);
};
//full name
Person.prototype.getFullname = function() {
  return this.firstname + " " + this.lastname;
};

//Gets JobTitle
Person.prototype.getJobTitle = function(jobTitle) {
  this.lastname = jobTitle;
};

console.log(saurav.getFullname());
console.log(saurav.calculateAge());

console.log(gaurav.getFullname());
console.log(gaurav.calculateAge());

gaurav.getJobTitle("Programmer");
console.log(gaurav.getFullname());
// check __proto__
console.log(gaurav.hasOwnProperty("firstname"));
console.log(gaurav.hasOwnProperty("getJobTitle"));
