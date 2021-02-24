'use strict';

let index = 0;
function sliding() {
  setTimeout(sliding, 2500);
  let item;
  const img = document.querySelectorAll('.fishImg');
  for (item = 0; item < img.length; item++) {
    img[item].style.display = 'none';
  }
  index++;
  if (index > img.length) {index = 1;}
  img[index -1].style.display = 'block';
}
sliding();
