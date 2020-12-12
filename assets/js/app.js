document.addEventListener('DOMContentLoaded', function () {

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
            self.el.style.display = 'inline-block';
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
    function block_me(el) {
        if (!(this instanceof block_me)) {
            return new block_me(el);
        }
        this.el = document.querySelector(el);
    }

    block_me.prototype.fade = function fade(type, ms) {
        var isIn = type === 'in',
            opacity = isIn ? 0 : 1,
            interval = 50,
            duration = ms,
            gap = interval / duration,
            self = this;

        if (isIn) {
            self.el.style.display = 'block';
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

    _('.preloader').fade('out', 500);


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
        _('.thanks').fade('in', 1500)
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

    // business logic
    const formInputName = document.querySelector(".form-input-name");

    new Typed('.greeting', {
        strings: ["Hello", " Oh hello there.. Today I am very happy because you visitng my website, Ummm.. can I know your name ? "],
        typeSpeed: 50,
        onComplete: () => {
            _('form').fade('in', 500);
        }
    });

    formInputName.addEventListener('submit', function (e) {
        e.preventDefault();
        openFullscreen();
        const name = document.querySelector(".name").value;
        localStorage.setItem('name', name);

        _('.welcome').fade('out', 500);

        document.querySelector('.myname2').innerHTML = name
        document.querySelector('.myname3').innerHTML = name.toUpperCase();

        setTimeout(() => {
            block_me('.apologize').fade('in', 1000);
            const name = localStorage.getItem('name');
            new Typed('.apologize-text', {
                strings: ["Hello", "Hello " + name + ".. ^1000 I apologized earlier if I was too brave to say this, but you have to know, I can't linger any longer harboring it"],
                typeSpeed: 50,
                onComplete: () => {
                    _('.btn-next').fade('in', 500);
                }
            });
        }, 1000);

    });

    const btnNext = document.querySelector(".btn-next");

    btnNext.addEventListener('click', function () {
        _('.apologize').fade('out', 500);

        setTimeout(() => {
            _('.shoot').fade('in', 1000);
        }, 1000);

        playOpening();
    });

    const btnNot = document.querySelector('.btn-not');
    btnNot.addEventListener('mouseover', function () {
        move();
    });

    btnNot.addEventListener('click', function () {
        move2();
    });

    const btnYes = document.querySelector('.btn-yes');
    btnYes.addEventListener('mouseover', function () {
        playVideo();
    });

});
