//Audio vezérlő

var audioHandler = function (div) {
    //Audio elem kiválasztása és mentése
    // this.audio = document.querySelector(div_selector);

    this.div = div;
    this.playBtn = div.querySelector(".play");
    this.muteBtn = div.querySelector(".mute");
    this.fullScreenBtn = div.querySelector(".full-screen");
    this.audio = div.querySelector("audio");
    this.video = div.querySelector("video");

    //Constructor
    this.construct = function () {

        this.mediaElement = this.audio == null ? this.video : this.audio;
        if (this.mediaElement == null) {
            console.error("nem talalható media elem");
            return;
        }

        var self = this;

        this.playBtn.addEventListener("click", function () {
            self.div.handler.togglePlay();
        }, false);


        this.muteBtn.addEventListener("click", function () {
            self.div.handler.toggleMute();
        }, false);
    };


    //Fullscreen
    if (this.fullScreenBtn !== null) {
        this.fullScreenBtn.addEventListener("click", function () {

            if (self.video.parentNode.classList.contains("col-md-12")) {
                self.video.parentNode.classList.remove("col-md-12");
                self.video.parentNode.classList.add("col-md-3");
            } else {
                self.video.parentNode.classList.remove("col-md-3");
                self.video.parentNode.classList.add("col-md-12");
            }


        }, false);
    }


    //Lejátszás
    this.play = function () {
        this.mediaElement.play();
    };

    //Lejátszás váltása
    this.togglePlay = function () {
        if (this.mediaElement.paused) {
            this.play();
            this.div.classList.add("played");
        } else {
            this.pause();
            this.div.classList.remove("played");
        }
    };

    //Megállítás
    this.pause = function () {
        this.mediaElement.pause();
    };

    //némítás
    this.mute = function () {
        this.mediaElement.muted = true;
    };


    //némítás váltása
    this.toggleMute = function () {
        this.mediaElement.muted = !this.mediaElement.muted;
        if (this.mediaElement.muted) {
            this.div.classList.add("muted");
        } else {
            this.div.classList.remove("muted");
        }
    };

    //Összes némítása
    this.muteAll = function () {
        var allAudio = document.querySelectorAll('audio, video');

        Array.prototype.forEach.call(allAudio, function (item) {
            item.muted = true;
        });

    };


    //léptetés
    this.setTime = function (cTime) {

        cTime = parseInt(cTime, 10);
        if (isNaN(cTime)) {
            console.error('Megadott értéknek számnak kell lennie');
            return;
        }

        cTime = cTime < this.mediaElement.duration ? cTime : this.mediaElement.duration;
        this.mediaElement.currentTime = cTime;
    };

    //this.audio.currentTime oda léptet
    //this.audio.duration  hossza 


    this.construct();
};


//var audio1 = new audioHandler('.audio1');
//var audio2 = new audioHandler('.audio2');

var audioDivs = document.querySelectorAll('.media-handler-div');


Array.prototype.forEach.call(audioDivs, function (item) {
    item.handler = new audioHandler(item);
});