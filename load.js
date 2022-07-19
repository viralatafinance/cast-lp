// LOADING BG + DOCUMENT.READYSTATE

const loadingBg = document.getElementById('loading_area')

document.onreadystatechange = function () {
    if (document.readyState == "interactive" || document.readyState == "complete") {
        loadingBg.style.opacity = 0;
        loadingBg.style.visibility = 'hidden';
        
        setTimeout(() => {
            loadingBg.style.display = 'none';
        }, 500);
    }
}