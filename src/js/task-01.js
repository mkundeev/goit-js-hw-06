
const listEl = document.querySelector('#categories');
const listItemEl = document.querySelectorAll('.item');

function numberOfCategories(list) {
    console.log(`Number of categories: ${list.children.length}`);
};

function listOfCategories(listOfItems) {
    return [...listOfItems].forEach((element) => {
        console.log(`Category: ${element.firstElementChild.textContent}`);
        console.log(`Elements: ${element.lastElementChild.children.length}`);
    });
}
numberOfCategories(listEl);
listOfCategories(listItemEl);
