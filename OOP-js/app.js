const personPrototype = {
  greeting: function() {
    return "hello there: " + this.firstname + this.lastname;
  },
  getjobtitle: function(jobtitle) {
    this.jobtitle = jobtitle;
    return "Job Title : " + this.jobtitle;
  }
};

const marry = Object.create(personPrototype);
marry.firstname = "gaurav";
marry.lastname = "pal";
marry.age = 30;

console.log(marry.greeting());
console.log(marry.getjobtitle("CEO"));

const saurav = Object.create(personPrototype, {
  firstname: { value: "saurav" },
  lastname: { value: "pal" },
  age: { value: 22 }
});
console.log(saurav);
console.log(saurav.greeting());
