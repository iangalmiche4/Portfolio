
/*__________________________________ SCROLL NAV-LINKS __________________________________*/

$(document).ready(function() {
    $('.js-scrollTo').on('click', function() { // Au clic sur un élément
        var page = $(this).attr('href'); // Page cible
        var speed = 750; // Durée de l'animation (en ms)
        $('html, body').animate( { scrollTop: $(page).offset().top }, speed ); // Go
        return false;
    });
});



/*__________________________________ SKILLS __________________________________*/


$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 500){
            let options = {
                startAngle: -1.55,
                size: 150,
                value: 0.85,
                fill: {gradient: ["#d62121", "#c72c2c"]}
            }
            $(".circle .bar").circleProgress(options).on('circle-animation-progress',
            function(event, progress, stepValue){
                $(this).parent().find("span").text(String(stepValue.toFixed(2).substr(2)) + '%');
            });
            $(".js .bar").circleProgress({
                value: 0.70,
            })
            $(".react .bar").circleProgress({
                value: 0.60,
            })
        }
    });
});

$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 100){
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


