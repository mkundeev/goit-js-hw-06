function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const divBoxEl = document.querySelector('#boxes');
const creatButtonEl = document.querySelector('[data-create]');
const destroyButtonEl = document.querySelector('[data-destroy]');
const inputValueEl = document.querySelector('input');

let numberOfBoxes = 0;

inputValueEl.addEventListener('input', (event) => {
  numberOfBoxes = event.currentTarget.value;
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
  numberOfBoxes = 0;
  return boxes;
}

function addBoxes() {
  inputValueEl.value = '';
  return divBoxEl.append(...createBoxes(numberOfBoxes));
}

creatButtonEl.addEventListener('click', addBoxes);

destroyButtonEl.addEventListener('click', () => {
  divBoxEl.innerHTML = '';
  inputValueEl.value = '';
  numberOfBoxes = 0;
});

