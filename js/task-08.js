
const formEl = document.querySelector('.login-form');


const handleSubmit = (event) => {
  event.preventDefault();
  const {
    elements: { email, password }
  } = event.currentTarget;

  if (email.value === "" || password.value === "") {
    return alert("Заповніть усі поля");
  }

    const results = {
        [email.name]: email.value,
        [password.name]: password.value,

  }
    console.log(results);
    event.currentTarget.reset();
}

formEl.addEventListener("submit", handleSubmit);
