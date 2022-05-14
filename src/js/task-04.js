
const counterEl = document.querySelector('#value');
const decrementEl = document.querySelector('[data-action="decrement"]');
const incrementEl = document.querySelector('[data-action="increment"]');

let counterValue = Number(counterEl.textContent);

const toDecreaseValue = () => {
    counterValue -= 1;
    counterEl.textContent = counterValue;
}
const toIncreaseValue = () => {
    counterValue += 1;
    counterEl.textContent = counterValue;
}

decrementEl.addEventListener('click', toDecreaseValue);

incrementEl.addEventListener('click', toIncreaseValue);

