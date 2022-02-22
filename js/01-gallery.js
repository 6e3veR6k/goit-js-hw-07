import { galleryItems } from './gallery-items.js';

const galleryRef = document.querySelector('.gallery');
let instance;

// creates img container
const createGalleryItem = ({ preview, original, description }) => {
  const resultDiv = document.createElement('div');
  resultDiv.classList.add('gallery__item');

  const galleryItem = `<a class="gallery__link" href="${original}">
      <img class="gallery__image"
          src="${preview}"
          data-source="${original}"
          alt="${description}"/>
    </a>`;

  resultDiv.insertAdjacentHTML('afterbegin', galleryItem);
  return resultDiv;
};

// render all galleries items
galleryRef.append(...galleryItems.map((i) => createGalleryItem(i)));

galleryRef.addEventListener('click', onImgClick);

// handle img click
function onImgClick(e) {
  e.preventDefault();
  if (e.target.nodeName !== 'IMG') {
    return;
  }
  const html = getImgHtml(e);
  instance = createModalInstance(html);
  instance.show();
}

// create markup based on img attributes from event.target
function getImgHtml(e) {
  const imgLink = e.target.dataset.source;
  const imgAlt = e.target.alt;
  return `<img src="${imgLink}" alt="${imgAlt}" width="1280">`;
}

// creates modal
function createModalInstance(html) {
  return basicLightbox.create(html, {
    onShow: () => window.addEventListener('keydown', onKeyPressed),
    onClose: () => window.removeEventListener('keydown', onKeyPressed),
  });
}

function onKeyPressed(e) {
  if (e.code === 'Escape') {
    instance.close();
  }
}
