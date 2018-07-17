// form blur event listner
document.getElementById("name").addEventListener("blur", valadateName);
document.getElementById("zip").addEventListener("blur", valadateZip);
document.getElementById("email").addEventListener("blur", valadateEmail);
document.getElementById("phone").addEventListener("blur", valadatePhone);

function valadateName() {
  const name = document.getElementById("name");
  const re = /^[A-Za-z]{2,10}$/;

  if (!re.test(name.value)) {
    name.classList.add("is-invalid");
  } else {
    name.classList.remove("is-invalid");
  }
}

function valadateZip() {
  const zip = document.getElementById("zip");
  const re = /^[0-9]{6}/;

  if (!re.test(zip.value)) {
    zip.classList.add("is-invalid");
  } else {
    zip.classList.remove("is-invalid");
  }
}

function valadateEmail() {
  const email = document.getElementById("email");
  const re = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;

  if (!re.test(email.value)) {
    email.classList.add("is-invalid");
  } else {
    email.classList.remove("is-invalid");
  }
}
function valadatePhone() {
  const phone = document.getElementById("phone");
  const re = /^\(?\d{3}\)?[-. ]?\d{3}[-. ]?\d{4}$/;

  if (!re.test(phone.value)) {
    phone.classList.add("is-invalid");
  } else {
    phone.classList.remove("is-invalid");
  }
}
