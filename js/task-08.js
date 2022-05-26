
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

//--------------------------------------------------------------------------------
//Добавьте JavaScript к кнопке button, чтобы при нажатии элемент <div id="text"> исчезал.

  /* <button type="button" id="hide">Нажмите, чтобы спрятать текст"<button/>
<div id="text">Текст</div> */

// const bodyEl = document.querySelector('body');

// bodyEl.insertAdjacentHTML('beforebegin', '<button type="button" id="hide">Нажмите, чтобы спрятать текст"<button/><div id="text">Текст</div>');

// const btnEl = document.querySelector('#hide');
// const textEl = document.querySelector('#text');
// console.log(btnEl)

// btnEl.addEventListener('click', cleanText)

// function cleanText() {
  // textEl.innerHTML = '';
  // textEl.style.color = 'transparent';
  // textEl.remove();
  //  textEl.style.opacity = 0;
  //  textEl.style.display = 'none';
  // textEl.hidden = true;
  // textEl.setAttribute('hidden', true);
  
// }
//Выводим кнопку с текстом "Заполнить" и
//незаполненный инпут, при клике на кнопку, заполняем инпут текстом "test@email.ua"
// {
//   /* <input type="text" id="text1">
// <button type="button" id="btn1">Заполнить<button/> */
// }
// const bodyEl = document.querySelector('body');
// bodyEl.insertAdjacentHTML('beforebegin', '<input type="text" id="text1"><button type="button" id="btn1">Заполнить</button>');

// const btnEl = document.querySelector('#btn1');
// const inputEl = document.querySelector('#text1');

// btnEl.addEventListener('click', addText)

// function addText() {
//   const message = prompt('введіть email');

//   inputEl.value = message || "test@email.ua" 
// }

//Передвиньте мяч по полю при клике на поле


// const refs = {
//   ball: document.querySelector('.ball'),
//   field: document.querySelector('.football-field'),
// }


// refs.field.addEventListener('click', wrap)

// function wrap(event) {
//   const { x, y } = getCoordinates(event);
//   moveBall(x, y);
// }

// function getCoordinates(event) {
//   const x = event.offsetX;
//   const y = event.offsetY;
//   return {x,y}
// }

// function moveBall(x, y) {
//   if (x <= 20) {
//     x=20
//   }
//    if (y <= 20) {
//     y=20
//   }
//   refs.ball.style.left = `${x-20}px`;
//   refs.ball.style.top = `${y-20}px`;
  
// }

// Вот документ с таблицей и формой.

/* */

// Таблицу с id="age-table".
// Все элементы label внутри этой таблицы (их три).
// Первый td в этой таблице (со словом «Age»).
// Форму form с именем name="search".
// Первый input в этой форме.

// const refs = {
//   table: document.querySelector('#age-table'),
//   // table2: document.getElementById('age-table'),
//   // table3: document.getElementsByTagName('table')['age-table'],
//   labels: document.querySelectorAll('label'),
//   // labels2: document.getElementsByTagName('label'),
  
// }
// const tableEl = document.querySelector('#age-table');
// const firstTd = tableEl.querySelectorAll('td')[0];
// const form = document.forms['search'];
// const input = form.lastElementChild;
// const input2 = form.querySelector('input');

// console.log(form)
// console.log(input2)