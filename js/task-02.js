const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const ingredientsEl = document.querySelector('#ingredients');


function creatItem(name) {
  const item = document.createElement('li');
    item.classList.add('item');
    item.textContent = name;
    return item;
}

function creatList (names) {
  return names.map(creatItem);
};


const items = creatList(ingredients);


ingredientsEl.append(...items);




// function markupItem(name) {
//   return `<li class="item">${name}<li>`
// }
// function markupList (names) {
//   return names.map(markupItem);
// };
// console.log(markupList(ingredients));
// const items = markupList(ingredients).join('');
// console.log(items)

// ingredientsEl.insertAdjacentHTML("afterbegin",items);

