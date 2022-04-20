const hamburger = document.getElementById('hamburger');
const navUL = document.getElementById('navbar');

hamburger.addEventListener('click', () => {
    navUL.classList.toggle('show');
})


const navSlide = () => {
    const burger = document.querySelector('.burger');
    burger.addEventListener('click', () => {

    //Burger Animation
    burger.classList.toggle('toggle');
    });
}

navSlide();