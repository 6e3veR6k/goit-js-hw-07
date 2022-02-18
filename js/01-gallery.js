import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems[0]);

const galleryRef = document.querySelector('.gallery');

const createGalleryItem = ({ preview, original, description }) => {
  const emptyDiv = document.createElement('div');

  const galleryItem = `<div class="gallery__item">
  <a class="gallery__link" href="large-image.jpg">
    <img
      class="gallery__image"
      src="small-image.jpg"
      data-source="large-image.jpg"
      alt="Image description"
    />
  </a>
</div>`;
};
