const mywindow = document.querySelector('#mywindow');
const vid = document.getElementById("myVideo");
const vidCont = document.querySelector(".vidcont");

function _(el) {
    if (!(this instanceof _)) {
        return new _(el);
    }
    this.el = document.querySelector(el);
}

_.prototype.fade = function fade(type, ms) {
    var isIn = type === 'in',
        opacity = isIn ? 0 : 1,
        interval = 50,
        duration = ms,
        gap = interval / duration,
        self = this;

    if (isIn) {
        self.el.style.display = 'inline';
        self.el.style.opacity = opacity;
    }

    function func() {
        opacity = isIn ? opacity + gap : opacity - gap;
        self.el.style.opacity = opacity;

        if (opacity <= 0) self.el.style.display = 'none'
        if (opacity <= 0 || opacity >= 1) window.clearInterval(fading);
    }

    var fading = window.setInterval(func, interval);
}

function move() {
    kali = 40;
    addanimation();
    random1 = (mywindow.offsetTop + (Math.floor(Math.random() * 10) - 5) * kali);
    random2 = (mywindow.offsetLeft + (Math.floor(Math.random() * 10) - 5) * kali);
    if (random1 > 0 && random1 < 33) random1 = 33 + 20;
    if (random1 < 0 && random1 > -33) random1 = -33 - 20;
    if (random2 > 0 && random2 < 83) random2 = 83 + 20;
    if (random2 < 0 && random2 > -83) random2 = -83 - 20;
    if (random1 == 0 && random2 == 0) random1 = -100;
    mywindow.style.top = random1 + 'px';
    mywindow.style.left = random2 + 'px';
    if (random1 < 0 || ((random1 + mywindow.clientHeight) > window.innerHeight)) {
        mywindow.style.top = "calc(50% - " + mywindow.clientHeight / 2 + "px)";
    }
    if (random2 < 0 || ((random2 + mywindow.clientWidth) > window.innerWidth)) {
        mywindow.style.left = "calc(50% - " + mywindow.clientWidth / 2 + "px)";
    }
}

function move2() {
    kali = 50;
    addanimation();
    random1 = (mywindow.offsetTop + (Math.floor(Math.random() * 10) - 5) * kali);
    random2 = (mywindow.offsetLeft + (Math.floor(Math.random() * 10) - 5) * kali);
    if (random1 > 0 && random1 < 33) random1 = 33 + 20;
    if (random1 < 0 && random1 > -33) random1 = -33 - 20;
    if (random2 > 0 && random2 < 83) random2 = 83 + 20;
    if (random2 < 0 && random2 > -83) random2 = -83 - 20;
    if (random1 == 0 && random2 == 0) random1 = -100;
    mywindow.style.top = random1 + 'px';
    mywindow.style.left = random2 + 'px';
    if (random1 < 0 || ((random1 + mywindow.clientHeight) > window.innerHeight)) {
        mywindow.style.top = "calc(50% - " + mywindow.clientHeight / 2 + "px)";
    }
    if (random2 < 0 || ((random2 + mywindow.clientWidth) > window.innerWidth)) {
        mywindow.style.left = "calc(50% - " + mywindow.clientWidth / 2 + "px)";
    }
}

function addanimation() {
    mywindow.classList.add("myanimated");
}

function playVideo() {
    stopOpening();
    openFullscreen();
    _('#mywindow').fade('out', 500)
    _('#myVideo').fade('in', 500)
    _('.vidcont').fade('in', 500)
    vid.play();
}

vid.onended = function () {
    playAudio();
    _('.vidcont').fade('out', 500);
}

function stopOpening() {
    var x = document.getElementById("myOpening");
    x.pause();
    x.currentTime = 0;
    var x = document.getElementById("myAudio");
    x.pause();
    x.currentTime = 0;
}

function playAudio() {
    var x = document.getElementById("myAudio");
    x.volume = 0.15;
    x.play();
}

function playOpening() {
    var x = document.getElementById("myOpening");
    x.volume = 0.3;
    x.play();
    x.addEventListener("ended", function () {
        stopOpening();
    });
}

function openFullscreen() {
    if (document.documentElement.requestFullscreen) {
        document.documentElement.requestFullscreen();
    } else if (document.documentElement.mozRequestFullScreen) { /* Firefox */
        document.documentElement.mozRequestFullScreen();
    } else if (document.documentElement.webkitRequestFullscreen) { /* Chrome, Safari & Opera */
        document.documentElement.webkitRequestFullscreen();
    } else if (document.documentElement.msRequestFullscreen) { /* IE/Edge */
        document.documentElement.msRequestFullscreen();
    }
}

playOpening();
