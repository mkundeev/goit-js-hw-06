{/* <input type="text" id="name-input" placeholder="Please enter your name" />
<h1>Hello, <span id="name-output">Anonymous</span>!</h1> */}

const inputEl = document.querySelector('#name-input');
const nameOutputEl = document.querySelector('#name-output');

const changeValue = event => {
    nameOutputEl.textContent = event.currentTarget.value || 'Anonymous';
};

inputEl.addEventListener("input", changeValue);


