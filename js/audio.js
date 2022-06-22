var enter = document.getElementById('enter');
var audio = document.getElementById('audio');

enter.onclick = function () {
    if (enter.style.opacity !== '0') {
        enter.style.opacity = '0';
        audio.volume = 0.5;
        audio.loop = 'true';
        audio.play();
        setTimeout(function () {
            enter.remove();
        }, 500);
        ScrollReveal({ reset: true });
        ScrollReveal().reveal('.heading', { delay: 400 });
        ScrollReveal().reveal('#arrow', { delay: 600 });
        ScrollReveal().reveal('.image', { delay: 400 });
        ScrollReveal().reveal('.heading-2', { delay: 500 });
        ScrollReveal().reveal('.text', { delay: 550 });
    }
};