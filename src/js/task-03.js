const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];



const listEl = document.querySelector('.gallery');


const makeImgItemMarkup = ({ url, alt }) => {
    return `<li class="gallery__item"><img class="gallery__picture" src="${url}" alt="${alt}"></li>`
  }

const makeImgListMarkup = data => {
  return data.map(makeImgItemMarkup)
}

console.log(makeImgListMarkup(images).join(''));

listEl.insertAdjacentHTML("afterbegin", makeImgListMarkup(images).join(''));



// function makeCard({ url, alt}) {
//   const itemEl = document.createElement('li');
//   itemEl.classList.add('item');
//   const imgEl = document.createElement('img');
//   imgEl.src = url;
//   imgEl.alt = alt;
//   imgEl.classList.add('picture');
//   itemEl.append(imgEl);
//   return itemEl;
// }

// function makeCards(data) {
//   return data.map(makeCard)
// }

// const imgList =  makeCards(images)

// listEl.append(...imgList);


// console.log(imgList);