import { galleryItems } from './gallery-items.js';
// Change code below this line



const gallery = document.querySelector(`.gallery`);

const imageList = 
    galleryItems.map(
        ({preview, original, description }) => {
        return `
        <a class="gallery__item" href="${original}">
          <img 
          class="gallery__image"
          src="${preview}" 
          data-sourse="${original}"
          alt="${description}">
          </a>`
    }).join(``);

    gallery.insertAdjacentHTML('afterbegin', imageList);

    var lightbox = new SimpleLightbox('.gallery a', {  captionDelay: 250,
          captionsData: "alt",});
      
