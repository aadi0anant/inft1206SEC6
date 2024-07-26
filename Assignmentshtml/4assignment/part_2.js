const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const images = ["pic1.jpg", "pic2.jpg", "pic3.jpg", "pic4.jpg", "pic5.jpg"];

/* Declaring the alternative text for each image file */
const alternativeText = {
    'pic1.jpg' : 'Eye',
    'pic2.jpg' : 'Mountain',
    'pic3.jpg' : 'Flower',
    'pic4.jpg' : 'Egyptian',
    'pic5.jpg' : 'Butterfly'
  }

/* Looping through images */
for (const image of images) {
    const newImage = document.createElement('img');
    newImage.setAttribute('src', `images/${image}`);
    newImage.setAttribute('alt', alternativeText[image]);
    thumbBar.appendChild(newImage);
    newImage.addEventListener('click', displayedImage.src = target.src);
    newImage.addEventListener('click', displayedImage.alt = target.alt);
}
/* Wiring up the Darken/Lighten button */
