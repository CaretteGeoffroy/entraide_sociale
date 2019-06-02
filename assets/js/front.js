window.onload = removeLoader;

// Style des liens sociaux de la partie haute de la page

const topDivFb = document.querySelector('.div-social-fb');
const topDivTwt = document.querySelector('.div-social-twt');
const topDivYtb = document.querySelector('.div-social-ytb');

const iconeFb = document.querySelector('.fa-facebook-f');
const iconeTwt = document.querySelector('.fa-twitter');
const iconeYtb = document.querySelector('.fa-youtube');

const loader = document.querySelector('.loader');

topDivFb.addEventListener('mouseenter', () =>{
    iconeFb.style.color = '#df7322';
})

topDivFb.addEventListener('mouseleave', () =>{
    iconeFb.style.color = 'white';
})

topDivTwt.addEventListener('mouseenter', () =>{
    iconeTwt.style.color = '#df7322';
})

topDivTwt.addEventListener('mouseleave', () =>{
    iconeTwt.style.color = 'white';
})

topDivYtb.addEventListener('mouseenter', () =>{
    iconeYtb.style.color = '#df7322';
})

topDivYtb.addEventListener('mouseleave', () =>{
    iconeYtb.style.color = 'white';
})

function removeLoader() {
    loader.parentNode.removeChild(loader);
}