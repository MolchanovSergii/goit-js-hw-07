import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector(".gallery");
const markupGallery = galleryItems.map(({preview, original, description}) =>    
    `
    <li class="gallery__item">
        <a class="gallery__link" href="${original}">
            <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
            />
        </a>
    </li>
`).join('');

gallery.insertAdjacentHTML('beforeend', markupGallery);
gallery.addEventListener('click', onClickGallery);

function onClickGallery(event) {
    event.preventDefault();
    const {target} = event
    if (!target.classList.contains("gallery__image")) {
        return;
    }

    const original = target.dataset.source;
    const description = target.alt;
    const modal = basicLightbox.create(
      `<img
            class="modal__image"
            src="${original}"
            alt="${description}"
            />`,
 
    );

    modal.show();
}




