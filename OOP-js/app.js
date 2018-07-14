//Subclass
class Person {
  constructor(firstname, lastname) {
    this.firstname = firstname;
    this.lastname = lastname;
  }

  greeting() {
    return "hello There : " + this.firstname + this.lastname;
  }
  static getmembershipcost() {
    return 500 + 1;
  }
}

class Customer extends Person {
  constructor(firstname, lastname, phone, membership) {
    super(firstname, lastname);
    this.phone = phone;
    this.membership = membership;
  }
}

const john = new Customer("gaurav", "pal", "1212", "asa");
console.log(john);
console.log(john.greeting());
console.log(Person.getmembershipcost());
console.log(Person.getmembershipcost());
console.log(Person.getmembershipcost());

console.log(Person.getmembershipcost());
