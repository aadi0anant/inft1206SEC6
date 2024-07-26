const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const images = ['pic1.jpg', 'pic2.jpg', 'pic3.jpg', 'pic4.jpg', 'pic5.jpg'];

/* Declaring the alternative text for each image file */
const alternativeText = {
    'pic1.jpg' : 'Eye',
    'pic2.jpg' : 'Mountain',
    'pic3.jpg' : 'Flower',
    'pic4.jpg' : 'Egyptian',
    'pic5.jpg' : 'Butterfly'
  }

/* Looping through images */
for(const image of images) {
  let newImage = document.createElement('img');
  newImage.src = `part_2.images/${image}`;
  newImage.alt = alternativeText[image];
  thumbBar.appendChild(newImage);
  
  newImage.addEventListener('click', function(event){
    displayedImage.src = event.target.src;
  });

  newImage.addEventListener('click', function(event){
    displayedImage.alt = event.target.alt;
  });
};

/* Wiring up the Darken/Lighten button */
btn.addEventListener('click', function(){
  let currentClass = btn.getAttribute('class');
  if(currentClass == 'dark'){
    btn.setAttribute('class', 'light');
    btn.textContent = 'Lighten';
    overlay.style.backgroundColor = 'rgb(0 0 0 / 50%)'
  }
  else {
    btn.setAttribute('class', 'dark');
    btn.textContent = 'Darken';
    overlay.style.backgroundColor = 'rgb(0 0 0 / 0%)';
  }
});
