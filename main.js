









/* HAMBURGUER MENU */

const hambt = document.querySelector('.hambt')
const nav = document.querySelector('header nav')

const hamDivs = document.querySelectorAll('.hambt div')

let showingNav = false;

function toggleNav() {
    if(showingNav == false) {
        showingNav = true;
        nav.classList.add('showing_nav')

        for(i=0;i<hamDivs.length;i++) {
            hamDivs[i].style.backgroundColor = 'var(--light)';
        }
    } else {
        showingNav = false;
        nav.classList.remove('showing_nav')

        for(i=0;i<hamDivs.length;i++) {
            hamDivs[i].style.backgroundColor = 'var(--light)';
        }
    }
}

hambt.addEventListener('click', toggleNav)




const vaPar1 = document.getElementById('va1')
const vaPar2 = document.getElementById('va2')
const vaPar3 = document.getElementById('va3')

let windowPosition;
const divisor = 5;
let resetted = false;

document.body.onscroll = function() {
    windowPosition = window.pageYOffset;

    vaPar1.style.backgroundPosition = windowPosition/divisor + 'px 0';
    
    vaPar2.style.backgroundPosition = windowPosition/-divisor + 'px 0';
    
    vaPar3.style.backgroundPosition = windowPosition/divisor + 'px 0';
    
    if(showingNav == true) {
        toggleNav()
    }
}



const h1ChangingTxt = document.getElementById('h1_changing_word')

h1ChangingTxt.innerHTML = "";

const backspaceSpeed = 45;
const backspacePauseSpeed = 380;
const typeSpeed = 85;
const pause = 900;
const longPause = 3000;

function typeWrite() {

setTimeout(() => {
    h1ChangingTxt.innerHTML = "D";
    setTimeout(() => {
        h1ChangingTxt.innerHTML = "De";
        setTimeout(() => {
            h1ChangingTxt.innerHTML = "Des";
            setTimeout(() => {
                h1ChangingTxt.innerHTML = "Desp";
                setTimeout(() => {
                    h1ChangingTxt.innerHTML = "Despe";
                    setTimeout(() => {
                        h1ChangingTxt.innerHTML = "Desper";
                        setTimeout(() => {
                            h1ChangingTxt.innerHTML = "Despert";
                                        setTimeout(() => {
                                            h1ChangingTxt.innerHTML = "Desperte";
                                            setTimeout(() => {
                                                h1ChangingTxt.innerHTML = "Desperte";
                                        setTimeout(() => {
                                        h1ChangingTxt.innerHTML = "Despert";
                                        setTimeout(() => {
                                        h1ChangingTxt.innerHTML = "Desper";
                                        setTimeout(() => {
                                        h1ChangingTxt.innerHTML = "Despe";
                                        setTimeout(() => {
                                        h1ChangingTxt.innerHTML = "Desp";
                                        setTimeout(() => {
                                        h1ChangingTxt.innerHTML = "Des";
                                        setTimeout(() => {
                                        h1ChangingTxt.innerHTML = "De";
                                        setTimeout(() => {
                                        h1ChangingTxt.innerHTML = "D";
                                        setTimeout(() => {
                                        h1ChangingTxt.innerHTML = "";
                                        setTimeout(() => {
                                        h1ChangingTxt.innerHTML = "A";
                                        setTimeout(() => {
                                        h1ChangingTxt.innerHTML = "Al";
                                        setTimeout(() => {
                                        h1ChangingTxt.innerHTML = "Ali";
                                        setTimeout(() => {
                                        h1ChangingTxt.innerHTML = "Alim";
                                        setTimeout(() => {
                                        h1ChangingTxt.innerHTML = "Alime";
                                        setTimeout(() => {
                                        h1ChangingTxt.innerHTML = "Alimen";
                                        setTimeout(() => {
                                        h1ChangingTxt.innerHTML = "Aliment";
                                        setTimeout(() => {
                                        h1ChangingTxt.innerHTML = "Alimente";
                                        setTimeout(() => {
                                        h1ChangingTxt.innerHTML = "Alimente";
                                        setTimeout(() => {
                                        h1ChangingTxt.innerHTML = "Alimente";
                                        setTimeout(() => {
                                        h1ChangingTxt.innerHTML = "Aliment";
                                        setTimeout(() => {
                                        h1ChangingTxt.innerHTML = "Alimen";
                                        setTimeout(() => {
                                        h1ChangingTxt.innerHTML = "Alim";
                                        setTimeout(() => {
                                        h1ChangingTxt.innerHTML = "Ali";
                                        setTimeout(() => {
                                        h1ChangingTxt.innerHTML = "Al";
                                        setTimeout(() => {
                                        h1ChangingTxt.innerHTML = "A";
                                        setTimeout(() => {
                                        h1ChangingTxt.innerHTML = "";
                                        setTimeout(() => {
                                        h1ChangingTxt.innerHTML = "";
                                        setTimeout(() => {
                                        h1ChangingTxt.innerHTML = "";
                                        setTimeout(() => {
                                        h1ChangingTxt.innerHTML = "A";
                                        setTimeout(() => {
                                        h1ChangingTxt.innerHTML = "Ab";
                                        setTimeout(() => {
                                        h1ChangingTxt.innerHTML = "Abr";
                                        setTimeout(() => {
                                        h1ChangingTxt.innerHTML = "Abra";
                                        setTimeout(() => {
                                        h1ChangingTxt.innerHTML = "Abrac";
                                        setTimeout(() => {
                                        h1ChangingTxt.innerHTML = "Abrace";
                                        setTimeout(() => {
                                        h1ChangingTxt.innerHTML = "Abrace";
                                        setTimeout(() => {
                                        h1ChangingTxt.innerHTML = "Abrace";
                                        setTimeout(() => {
                                        h1ChangingTxt.innerHTML = "Abrace";
                                        setTimeout(() => {
                                        h1ChangingTxt.innerHTML = "Abrace";
                                        setTimeout(() => {
                                        h1ChangingTxt.innerHTML = "Abrac";
                                        setTimeout(() => {
                                        h1ChangingTxt.innerHTML = "Abra";
                                        setTimeout(() => {
                                            h1ChangingTxt.innerHTML = "Abr";
                                            setTimeout(() => {
                                                h1ChangingTxt.innerHTML = "Ab";
                                                setTimeout(() => {
                                                    h1ChangingTxt.innerHTML = "A";
                                                    setTimeout(() => {
                                                        h1ChangingTxt.innerHTML = "";
                                        
                                                        typeWrite()
                                                    }, backspaceSpeed);
                                                }, backspaceSpeed);
                                            }, backspaceSpeed);
                                        }, backspaceSpeed);
                                        }, backspacePauseSpeed);
                                        }, backspaceSpeed);
                                        }, backspaceSpeed);
                                        }, longPause);
                                        }, typeSpeed);
                                        }, typeSpeed);
                                        }, typeSpeed);
                                        }, typeSpeed);
                                        }, typeSpeed);
                                        }, typeSpeed);
                                        }, typeSpeed);
                                        }, pause);
                                        }, backspaceSpeed);
                                        }, backspaceSpeed);
                                        }, backspaceSpeed);
                                        }, backspaceSpeed);
                                        }, backspaceSpeed);
                                        }, backspaceSpeed);
                                        }, backspaceSpeed);
                                        }, backspacePauseSpeed);
                                            }, longPause);
                                        }, typeSpeed);
                                        }, typeSpeed);
                                        }, typeSpeed);
                                        }, typeSpeed);
                                        }, typeSpeed);
                                        }, typeSpeed);
                                        }, typeSpeed);
                                        }, typeSpeed);
                                        }, typeSpeed);
                                            }, pause);
                                        }, backspaceSpeed);
                                        }, backspaceSpeed);
                                        }, backspaceSpeed);
                                        }, backspaceSpeed);
                                        }, backspaceSpeed);
                                        }, backspaceSpeed);
                                        }, backspacePauseSpeed);
                                        }, backspaceSpeed);
                                        }, longPause);
                                    }, typeSpeed);
                        }, typeSpeed);
                    }, typeSpeed);
                }, typeSpeed);
            }, typeSpeed);
        }, typeSpeed);
    }, typeSpeed);
}, pause);

    
}

typeWrite()





























const submitChangingText = document.querySelector('.changing_txt p')


function changeSubmitText() {
    setTimeout(() => {
        submitChangingText.innerHTML = "come??ou um<br>projeto bacana,";
        setTimeout(() => {
            submitChangingText.innerHTML = "tem grande destaque<br>na c??omunidade,";
            setTimeout(() => {
                submitChangingText.innerHTML = "batalhou muito pelo<br>que tem hoje,";
                setTimeout(() => {
                    submitChangingText.innerHTML = "fez e faz diferen??a<br>na vida de algu??m,";
                    changeSubmitText()
                }, 2500);
            }, 2500);
        }, 2500);
    }, 2500);
}



changeSubmitText()




















