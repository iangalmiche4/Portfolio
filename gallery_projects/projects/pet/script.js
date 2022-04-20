$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        if(this.scrollY > 200){
            $('.navbar').addClass("stickys");
        }else{
            $('.navbar').removeClass("stickys");
        }
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });
    //slide-up right
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop : 0});
    });
});



/*__________________________________ NAVBAR BURGER BTN __________________________________*/

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



/*__________________________________ SCROLL NAV-LINKS __________________________________*/

$(document).ready(function() {
    $('.js-scrollTo').on('click', function() { // Au clic sur un élément
        var page = $(this).attr('href'); // Page cible
        var speed = 750; // Durée de l'animation (en ms)
        $('html, body').animate( { scrollTop: $(page).offset().top }, speed ); // Go
        return false;
    });
});




/*__________________________________ COUNTER UP __________________________________*/





$(document).ready(function(){
    $(".counter").counterUp({
        delay: 10,
        time: 1200
    });
});