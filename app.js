var toggle=false;

document.body.querySelector(".menuIcon").addEventListener("click",function() {


    toggle = !toggle;

    if (toggle) {
        document.body.querySelector(".menu").style.right = "0";

    } else {
        document.body.querySelector(".menu").style.right = "-150px";
    }
})

const splash = document.querySelector('.splash');

document.addEventListener('DOMContentLoaded', (e)=>{
    setTimeout(()=>{
        splash.classList.add('display-none');
    }, 2000);
})
