
const inputEl = document.querySelector('#validation-input');



inputEl.addEventListener("blur", () => {
    inputEl.classList.add('invalid');
    if (inputEl.value.length === Number(inputEl.getAttribute("data-length"))) {
        inputEl.classList.remove('invalid');
        inputEl.classList.add('valid');
    }
});