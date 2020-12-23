// DOM elements needed
const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");

// SHOW SUCCESS OR ERRORS

let userSuccess = "false";
let emailSuccess = "false";
let passwordSuccess = "false";

// Show error message and outline
function showError(input, message) {
  // add error class to show red error outline
  const formControl = input.parentElement;
  formControl.className = "form-control error";
  // add the error message
  const small = formControl.querySelector("small");
  small.innerText = message;
}

// Show success outline
function showSuccess(input) {
  const formControl = input.parentElement;
  formControl.className = "form-control success";
}

// CHECK FIELDS
// Get capitalized fieldname for use later
function getFieldName(input) {
  let regex = /[A-Z][a-z]+/g;
  return (input.id[0].toUpperCase() + input.id.slice(1)).match(regex)[0];
}

// Check user username fits min and max boundaries
function checkUsername(input, min, max) {
  if (input.value.length < min) {
    showError(input, `${getFieldName(input)} is not valid`);
  } else if (input.value.length > max) {
    showError(input, `${getFieldName(input)} is not valid`);
  } else {
    showSuccess(input);
    userSuccess = "true";
  }
}

// Check email is valid
function checkEmail(input) {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (re.test(input.value.trim())) {
    showSuccess(input);
    emailSuccess = "true";
  } else {
    showError(input, "Email is not valid");
  }
}

// Check password is valid
function checkPassword(input) {
  const re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  if (re.test(input.value.trim())) {
    showSuccess(input);
    passwordSuccess = "true";
  } else {
    showError(input, "Password is not valid");
  }
}

// Check passwords match
function checkPasswordsMatch(input1, input2) {
  if (input1.value !== input2.value) {
    showError(input2, "Passwords do not match");
    passwordSuccess = "false";
  }
}

// STORE FORM DATA
function storeFormData() {
  const user = {
    username: form.username.value,
    email: form.email.value,
    password: form.password2.value,
  };
  // DO SOMETHING WITH USER DATA
  console.log(user);
}

// EVENT LISTENER
// Add event listener for the submit button
form.addEventListener("submit", (e) => {
  // prevent page from refreshing
  e.preventDefault();

  checkUsername(username, 3, 15);
  checkEmail(email);
  checkPassword(password);
  checkPassword(password2);
  checkPasswordsMatch(password, password2);

  console.log(username.value);
  // Store data if all fields are correctly stored:
  if (
    userSuccess === "true" &&
    emailSuccess === "true" &&
    passwordSuccess === "true"
  ) {
    storeFormData();
  }
});
