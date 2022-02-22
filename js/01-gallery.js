import { galleryItems } from './gallery-items.js';

// Change code below this line

const galleryRef = document.querySelector('.gallery');

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

galleryRef.append(...galleryItems.map((i) => createGalleryItem(i)));

const instance = basicLightbox.create(galleryRef);
instance.show(() => console.log('lightbox now visible'));
