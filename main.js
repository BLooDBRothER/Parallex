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
