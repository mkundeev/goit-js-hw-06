

const listItemEl = document.querySelectorAll('.item');

function getNumberOfCategories(listOfItems) {
    console.log(`Number of categories: ${listOfItems.length}`);
};

function getListOfCategories(listOfItems) {
    return listOfItems.forEach((element) => {
        console.log(`Category: ${element.firstElementChild.textContent}`);
        console.log(`Elements: ${element.lastElementChild.children.length}`);
    });
}
getNumberOfCategories(listItemEl);
getListOfCategories(listItemEl);
