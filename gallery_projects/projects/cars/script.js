$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 250){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        if(this.scrollY > 250){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
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



/* counter-up animation */


$(document).ready(function(){
    $(".counter").counterUp({
        delay: 10,
        time: 1200
    });
});

