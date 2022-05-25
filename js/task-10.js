function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const divBoxEl = document.querySelector('#boxes');
const creatButtonEl = document.querySelector('[data-create]');
const destroyButtonEl = document.querySelector('[data-destroy]');
const inputValueEl = document.querySelector('input');

let numberOfBoxes = 0;

inputValueEl.addEventListener('input', () => {
  numberOfBoxes = inputValueEl.value;
});

creatButtonEl.addEventListener('click', addBoxes);

destroyButtonEl.addEventListener('click', () => {
  divBoxEl.innerHTML = '';
  resetNumberOfBoxes();
});

function createBoxes(amount) {
  let boxSize = 30;
  let boxes = [];
  for (let i = 1; i <= amount; i += 1){
    const box = document.createElement('div');
    box.style.backgroundColor = getRandomHexColor();
    box.style.width = `${boxSize}px`;
    box.style.height = `${boxSize}px`;
    boxSize += 10;
    boxes.push(box);
  }
  resetNumberOfBoxes();
  return boxes;
}

function addBoxes() {
  return divBoxEl.append(...createBoxes(numberOfBoxes));
}


function resetNumberOfBoxes() {
  inputValueEl.value = '';
  numberOfBoxes = 0;
}


// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215)
//     .toString(16)
//     .padStart(6, 0)}`;
// }
// const refs = {
//   input: document.querySelector("#controls input"),
//   createBtn: document.querySelector("button[data-create]"),
//   destroyBtn: document.querySelector("button[data-destroy]"),
//   boxesWrap: document.querySelector("#boxes"),
// };
// refs.input.addEventListener("input", getNumber);
// refs.createBtn.addEventListener("click", createBoxes);
// refs.destroyBtn.addEventListener("click", destroyBoxes);


// let number = 0;
// function getNumber(event) {
//   number = Number(event.currentTarget.value);
//  return number;
 
// }
// function createBoxes(event) {
//   const newArr = [];
//   newArr.length = number;
//   console.log(newArr);
 
//   const resultArray = [...newArr].map((element, index, array) => {
//     element = document.createElement("div");
//     const increaseSize = 30 + index * 10;
//     console.log(increaseSize);
//     element.style.width = `${increaseSize}px`;
//     element.style.height = `${increaseSize}px`;
//     element.style.backgroundColor = getRandomHexColor();
//     console.log(element.style.width);
//     console.log(element.style.backgroundColor);
//     console.log(element);
//     return element;
//   });
//   console.log('resultArray' + resultArray);

//   refs.boxesWrap.append(...resultArray);
//   refs.input.value = "";
//   number = 0;
// }
// function destroyBoxes(event) {
//   refs.boxesWrap.innerHTML = "";
// }