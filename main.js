var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
var element = document.getElementById('text');
var x = window.matchMedia("(max-width: 568px)");
var ig = document.getElementById("img1");
if (isMobile) {
    ig.style.background = "url('./Assetes/mob.jpg')"
    ig.style.height = "100%";
    ig.style.backgroundAttachment = "fixed";
    ig.style.backgroundSize = "contain";
    ig.style.backgroundRepeat = "norepeat";
}

function toggleopen(){
    var hg = document.getElementById("cnt-hg");
    var ic = document.getElementById("m-o");
    if(hg.className == "nav"){
        hg.className += " hg";
        ic.style.transform = "rotate(180deg)";
    }
    else{
        hg.className = "nav";
        ic.style.transform = "rotate(0deg)";
    }
}
