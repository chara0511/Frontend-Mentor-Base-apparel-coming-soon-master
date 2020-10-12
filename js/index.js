const submit = document.getElementById("submit");

const emailField = document.getElementById("emailField");

const errorMessage = document.getElementById("errorMessage");

const validateEmail = (email) => {
  const regExp = new RegExp(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i);

  return regExp.test(String(email).toLocaleLowerCase());
};

const message = (message) => {
  return (errorMessage.innerHTML = `
      <p class="px-5  text-red-soft text-left"> ${message} </p> 
      <img class="absolute inset-y-0 right-0 pt-6 pr-20 lg:pr-24 2xl:pr-32" src="/icons/icon-error.svg" alt="iconError" />
    `);
};

const clearMessage = () => {
  return (errorMessage.innerHTML = "");
};

submit.addEventListener("submit", (e) => {
  e.preventDefault();

  let email = emailField.value;

  if (email.length === 0) {
    return message("Field empty, enter a valid email");
  }

  if (validateEmail(email)) {
    alert(JSON.stringify({ email }, null, 2));
  } else {
    return message("Please provide a valid email");
  }

  emailField.value = "";
  clearMessage();
});
