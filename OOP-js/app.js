class Person {
  constructor(firstname, lastname, dob) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.birthday = new Date(dob);
  }

  gretting() {
    return "hello " + this.firstname + this.lastname;
  }
  calculateage() {
    const age = Date.now() - this.birthday.getTime();
    const aggDate = new Date(age);
    return Math.abs(aggDate.getUTCFullYear() - 1970);
  }
  static add(x, y) {
    return x + y;
  }
}

const gaurav = new Person("gaurav", "pal", "01-07-1994");
console.log(gaurav.gretting());
console.log(gaurav.calculateage());
console.log(Person.add(1, 2));
