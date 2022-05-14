
const formEl = document.querySelector('.login-form');
// const buttonEl = document.querySelector('.login-form');

const handleSubmit = (event) => {
  event.preventDefault();
  const {
    elements: { email, password }
  } = event.currentTarget;

  if (email.value === "" || password.value === "") {
    return alert("Заповніть усі поля");
  }

    const results = {
        email: email.value,
        password: password.value,

  }
    console.log(results);
    event.currentTarget.reset();
}

formEl.addEventListener("submit", handleSubmit);
