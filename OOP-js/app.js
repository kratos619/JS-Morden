//ProtoType Inheritance
//Person Prototype constructior

function Person(firstname, lastname) {
  this.firstname = firstname;
  this.lastname = lastname;
}

Person.prototype.greating = function() {
  return this.firstname + " " + this.lastname;
};

const person1 = new Person("gaurav", "pal");
console.log(person1.greating());

// Customer cconstructor
function Customer(firstname, lastname, phnumber, membership) {
  Person.call(this, firstname, lastname);
  this.phnumber = phnumber;
  this.membership = membership;
}

// Inhinherit ther Person Prototype method
Customer.prototype = Object.create(Person.prototype);
// make customer.prototype return Customer()
Customer.prototype.constructor = Customer;
//create Customer
const customer1 = new Customer("saurav", "pal", "3223232", "asd");
console.log(customer1);

//Customer Greating
Customer.prototype.greating = function() {
  return "hello Customer " + this.firstname + " " + this.lastname;
};
console.log(customer1.greating());
