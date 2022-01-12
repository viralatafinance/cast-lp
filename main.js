
const loading = document.querySelector('#loading')

document.onreadystatechange = function () {
    if (document.readyState == "interactive" || document.readyState == "complete") {

        loading.style.opacity = 0;
        loading.style.visibility = 'hidden';

    }
}




let windowPosition;
const parallaxImg = document.querySelector('.parallax_img')

if(window.matchMedia('(orientation: landscape) and (min-width:900px)').matches) {
    document.body.onscroll = function() {
        windowPosition = window.pageYOffset;
        parallaxImg.style.transform = "translateY(" + windowPosition /2 + "px)";
    }
} else {
    document.body.onscroll = function() {
        windowPosition = window.pageYOffset;
        parallaxImg.style.transform = "translateY( -" + windowPosition /1.5 + "px)";
    }
    
}
