
const listEl = document.querySelector('#categories');
const listItemEl = document.querySelectorAll('.item');

function getNumberOfCategories(list) {
    console.log(`Number of categories: ${list.children.length}`);
};

function getListOfCategories(listOfItems) {
    return [...listOfItems].forEach((element) => {
        console.log(`Category: ${element.firstElementChild.textContent}`);
        console.log(`Elements: ${element.lastElementChild.children.length}`);
    });
}
getNumberOfCategories(listEl);
getListOfCategories(listItemEl);
