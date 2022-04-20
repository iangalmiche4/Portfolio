$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 36.8){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        if(this.scrollY > 36.8){
            $('.sub-menu').addClass("be_top");
        }else{
            $('.sub-menu').removeClass("be_top");
        }
        if(this.scrollY > 36.8){
            $('.home').addClass("margtop");
        }else{
            $('.home').removeClass("margtop");
        }

    });
});