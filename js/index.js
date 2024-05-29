//main_bg slide
$(document).ready(function(){
    $('.main_slider').slick({
        autoplay: true,
        autoplaySpeed: 2000,
        dots: true,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear',
        arrows: true
    });
});     

// header 배경 색 변경
window.addEventListener('scroll', function() {
    var header = document.querySelector('header');
    var links = document.querySelectorAll('.gnb > li > a');

    if (window.scrollY > 0) {
        header.classList.add('scroll');
        links.forEach(function(link) {
            link.style.color = "#000";
        });
    } else {
        header.classList.remove('scroll');
        links.forEach(function(link) {
            link.style.color = "#fff";
        });
    }
});

// header 로고 색 변경
window.addEventListener('scroll', function() {
    var innerHeader = document.querySelector('.inner_header');
    if (window.scrollY > 0) {
        innerHeader.classList.add('scroll');
    } else {
        innerHeader.classList.remove('scroll');
    }
});


window.addEventListener('scroll', function() {
    var innerHeader = document.querySelector('.inner_header');
    var logoLink = document.querySelector('.logo > a');

    if (window.scrollY > 0) {
        innerHeader.classList.add('scroll');
        logoLink.classList.add('scroll'); 
    } else {
        innerHeader.classList.remove('scroll');
        logoLink.classList.remove('scroll');
    }
});
