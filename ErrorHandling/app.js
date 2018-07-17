var user = { email: "ds@gmail.com" };
try {
  //produce refrence error
  //myFunction();
  //Produce type error
  //null.myFuncttion();
  //will Produce SysntaxError
  //eval("2+3");
  //will produce Error
  //decodeURIComponent("%");

  if (!user.name) {
    throw "user has no name";
  }
} catch (error) {
  console.log(error);
  //   console.log(error.name);
  //   console.log(error instanceof ReferenceError);
} finally {
  //console.log("finally run");
}
//console.log("programm continues....");
