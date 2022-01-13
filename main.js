
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
}


function success() {
    const button = document.querySelector('form button');
    const inputs = document.querySelectorAll('form input');

    button.innerText = "ENVIADO COM SUCESSO!"

    for(i = 0; i < inputs.length; i++) {
            inputs[i].value = ""
    }

}

const handleSubmit = (e) => {
  e.preventDefault()
  let myForm = document.getElementById('form');
  let formData = new FormData(myForm)
  fetch('/', {
    method: 'POST',
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams(formData).toString()
  }).then(() => success()).catch((error) =>
    alert(error))
}

document.getElementById('form').addEventListener("submit", handleSubmit);