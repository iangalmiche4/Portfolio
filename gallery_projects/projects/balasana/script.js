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

/* scroll animation */
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