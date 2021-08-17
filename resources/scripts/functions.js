function openNav() {
    document.getElementById("mySidenav").style.width = "250px", document.getElementById("main").style.marginLeft = "250px"
}
function closeNav() { document.getElementById("mySidenav").style.width = "0", document.getElementById("main").style.marginLeft = "0" }
$(window).scroll(function () {
    $(window).mouseup(function () {
        var o = $(window).scrollTop();
        sessionStorage.setItem("scrollTop", o);
    });
})
$(document).ready(function () {
    $(".scroll").mouseup(function (o) {
        o.preventDefault(), $("body,html").animate({ scrollTop: $(this.hash).offset().top }, 1e3);
    })
    $('.owl-carousel').owlCarousel({
        rtl:true,
        loop:true,
        margin:20,
        nav:true,
        dots:false,
        navText:["<img src='./resources/images/arrow-active.svg'>","<img src='./resources/images/arrow.svg'>"],
        responsive:{
            0:{
                items:2
            },
            600:{
                items:2
            },
            1000:{
                items:3
            }
        }
    })
});