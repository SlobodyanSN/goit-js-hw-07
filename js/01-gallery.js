import { galleryItems } from './gallery-items.js';
// Change code below this line



// Створення і рендер розмітки на підставі масиву даних galleryItems і наданого шаблону елемента галереї.

// Реалізація делегування на div.gallery і отримання url великого зображення.

// Підключення скрипту і стилів бібліотеки модального вікна basicLightbox. 
// Використовуй CDN сервіс jsdelivr і додай у проект посилання на мініфіковані (.min) файли бібліотеки.

// Відкриття модального вікна по кліку на елементі галереї. Для цього ознайомся з документацією і прикладами.

// Заміна значення атрибута src елемента <img> в модальному вікні перед відкриттям. 

// Використовуй готову розмітку модального вікна із зображенням з прикладів бібліотеки basicLightbox.

// Розмітка елемента галереї
// Посилання на оригінальне зображення повинно зберігатися в data-атрибуті source на елементі <img>,
//  і вказуватися в href посилання. Не додавай інші HTML теги або CSS класи, крім тих,
//   що містяться в цьому шаблоні.

const gallery = document.querySelector(`.gallery`);

const imageList = 
    galleryItems.map(
        ({preview, original, description }) => {
        return `<div class="gallery__item">
        <a class="galary_link" href="${original}">
          <img 
          class="gallery__image"
          src="${preview}" 
          data-sourse="${original}"
          alt="${description}">
          </a>
        </div>`
    }).join(``);

    gallery.insertAdjacentHTML('afterbegin', imageList);

    gallery.addEventListener(`click`, onBigImg);

    function onBigImg(event) {
        event.preventDefault()
       
    }


