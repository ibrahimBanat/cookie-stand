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


function dubai() {
  document.getElementById('dubai').style.display = 'block';
  document.getElementById('paris').style.display = 'none';
  document.getElementById('tokyo').style.display = 'none';
  document.getElementById('seattle').style.display = 'none';
  document.getElementById('lima').style.display = 'none';

}

function tokyo() {
  document.getElementById('dubai').style.display = 'none';
  document.getElementById('paris').style.display = 'none';
  document.getElementById('tokyo').style.display = 'block';
  document.getElementById('seattle').style.display = 'none';
  document.getElementById('lima').style.display = 'none';

}
function paris() {
  document.getElementById('dubai').style.display = 'none';
  document.getElementById('paris').style.display = 'block';
  document.getElementById('tokyo').style.display = 'none';
  document.getElementById('seattle').style.display = 'none';
  document.getElementById('lima').style.display = 'none';

}
function lima() {
  document.getElementById('dubai').style.display = 'none';
  document.getElementById('paris').style.display = 'none';
  document.getElementById('tokyo').style.display = 'none';
  document.getElementById('seattle').style.display = 'none';
  document.getElementById('lima').style.display = 'block';

}
function seattle() {
  document.getElementById('dubai').style.display = 'none';
  document.getElementById('paris').style.display = 'none';
  document.getElementById('tokyo').style.display = 'none';
  document.getElementById('seattle').style.display = 'bloack';
  document.getElementById('lima').style.display = 'none';

}


const salesButton = document.querySelector('.sales');
const contactButton = document.querySelector('.contact');
const shopLocations = document.querySelector('.locations__Section');
const footer = document.querySelector('footer');

salesButton.addEventListener('click', function(){
  shopLocations.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'start'});
});
contactButton.addEventListener('click', function(){
  footer.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'start'});
});


