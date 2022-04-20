
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

/*__________________________________ SUIVI NAVBAR __________________________________*/


const sections = document.querySelectorAll('section');
const navLi = document.querySelectorAll('nav div.nav-content div.left ul.nav-links li');

window.addEventListener('scroll', ()=> {
    let current = '';
    sections.forEach( section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if(pageYOffset >= sectionTop){
            current = section.getAttribute('id');
        }
    })

    navLi.forEach( li => {
        li.classList.remove('active');
        if(li.classList.contains(current)){
            li.classList.add('active')
        }
    })
})






/*__________________________________ HOME ANIMATION __________________________________*/



const titreSpans = document.querySelectorAll('h1 span');
const btns = document.querySelectorAll('.btn-first');
const logo = document.querySelector('.logo');
const medias = document.querySelectorAll('.bulle');
const l1 = document.querySelector('.l1');
const l2 = document.querySelector('.l2');

window.addEventListener('load', () => {

    const TL = gsap.timeline({paused: true});

    TL
    .staggerFrom(titreSpans, 1, {top: -50, opacity: 0, ease: "power2.out"}, 0.3)
    .staggerFrom(btns, 1, {opacity: 0, ease: "power2.out"}, 0.3, '-=1')
    .from(l1, 1, {width: 0, ease: "power2.out"}, '-=2')
    .from(l2, 1, {width: 0, ease: "power2.out"}, '-=2')
    .from(logo, 0.4, {transform: "scale(0)", ease: "power2.out"}, '-=2')
    .staggerFrom(medias, 1, {right: -200, ease: "power2.out"}, 0.3, '-=1');

    
    

    TL.play();
})




/*__________________________________ SCROLL UP BTN __________________________________*/

$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 640){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        if(this.scrollY > 640){
            $('.about').addClass("stic");
        }else{
            $('.about').removeClass("stic");
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





    

    
/*__________________________________ TYPING ANIMATION __________________________________*/


    var typed = new Typed(".typing", {
        strings: ["Etudiant", "Développeur", "Designer", "Humain"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });
    
});




/*__________________________________ SCROLL ANIMATION __________________________________*/


const ratio = .1
const options = {
    root: null,
    rootMargin: '0px',
    threshold: ratio
}

const handleIntersect = function (entries, observer) {
    entries.forEach(function (entry) {
        if (entry.intersectionRatio > ratio) {
            entry.target.classList.add('reveal-visible')
            observer.unobserve(entry.target)
        }
        if (entry.intersectionRatio > ratio) {
            entry.target.classList.add('reveal-visible-2')
            observer.unobserve(entry.target)
        }
        if (entry.intersectionRatio > ratio) {
            entry.target.classList.add('reveal-visible-3')
            observer.unobserve(entry.target)
        }
    })
}
const observer = new IntersectionObserver(handleIntersect, options)
document.querySelectorAll('[class*= "reveal-"]').forEach(function (r) {
    observer.observe(r)
})
document.querySelectorAll('[class*= "reveal_2-"]').forEach(function (r) {
    observer.observe(r)
})
document.querySelectorAll('[class*= "reveal_3-"]').forEach(function (r) {
    observer.observe(r)
})



/*__________________________________ FLIP EFFECT __________________________________*/


//on defini la variable == card 1
var card = document.getElementById('card');
card.addEventListener( 'click', function() {
  card.classList.toggle('is-flipped');
});


//on defini la variable2 == card 2
var card2 = document.getElementById('card2');
card2.addEventListener( 'click', function() {
  card2.classList.toggle('is-flipped2');
});
