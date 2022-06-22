var enter = document.getElementById('enter');
var audio = document.getElementById('audio')
enter.onclick = function () {
    if (enter.style.opacity !== '0') {
        enter.style.opacity = '0';
        audio.play();
        setTimeout(function () {
            enter.remove();
        }, 500);
    }
};