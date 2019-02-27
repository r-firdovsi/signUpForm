let banner        = document.querySelector('.banner');
let bannerBtn     = document.querySelector('.banner-btn');
let container     = document.querySelector('.container');
let formContainer = document.querySelector('.form-container');
let xBtn          = document.querySelector('.x-btn');


bannerBtn.addEventListener ('click', () => {
  	banner.style.display = 'none';
  	formContainer.style.cssText = 'opacity:1; visibility: visible';
  	container.style.background = '#cc683c';
  });

xBtn.addEventListener ('click', () => {
  	banner.style.display = 'flex';
  	formContainer.style.cssText = 'opacity:0; visibility: hidden';
  	container.style.cssText = 'background: linear-gradient(rgba(0, 0, 0, .8), rgba(0, 0, 0, .7)), url(images/bg1.jpeg) center no-repeat; background-size:cover';

  });





























