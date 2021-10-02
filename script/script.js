// Splide slider
const config = {
    type: 'carousel',
    perView: 3,
    gap: 30,
    breakpoints: {
        1100: { perView: 2 },
        776: { perView: 1 }
    }
}
new Glide('.glide', config).mount();
const navbar = document.querySelector('.nav');
const menuIcon = document.querySelector('.menu__icon');
menuIcon.addEventListener('click', function(){
    this.classList.toggle('active');
    navbar.classList.toggle('show');
});
const videoButton = document.querySelector('.trailer__btn');
const closeIcon = document.querySelector('.close__icon');
const video = document.querySelector('.trailer__video');
const trailer = document.querySelector('.trailer');
videoButton.addEventListener('click', function(){
    trailer.classList.add('active');
    video.setAttribute('controls', '');
    video.muted = false;
    video.volume = 0.5;
});
closeIcon.addEventListener('click', function(){
    trailer.classList.remove('active');
    video.removeAttribute('controls');
    video.muted = true;
    video.play();
});
// navbar animate scroll
const scrollupBtn = document.querySelector('.scrollup__btn');
window.addEventListener('scroll',function(){    
    if (this.scrollY > 80) {
        navbar.classList.add('active');
        scrollupBtn.style.opacity = '1';
        scrollupBtn.style.pointerEvents = 'auto';
    }
    else{
        navbar.classList.remove('active');
        scrollupBtn.style.opacity = '0';
        scrollupBtn.style.pointerEvents = 'none';
    }
});
scrollupBtn.addEventListener('click', function(){
    document.querySelector('html').scrollTop = 0;
})