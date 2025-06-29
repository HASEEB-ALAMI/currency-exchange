const video = document.getElementById('video');
const play = document.getElementById('btn1');
const stop = document.getElementById('btn2');
const range = document.getElementById('range');
const time = document.getElementById('time');
function playAndStop(){
    if(video.paused){
        video.play();
        play.firstElementChild.className = "fa fa-pause";
    }else{
        video.pause();
        play.firstElementChild.className = "fa fa-play";

    }
}

function stopAndBegin(){
    video.currentTime = 0;
    video.pause();
    play.firstElementChild.className = "fa fa-play";

}

function goRange(){
    range.value = (video.currentTime / video.duration) * 100;
    let min = Math.floor(video.currentTime/60);
    if(min < 10){
        min = '0' + min;
    }
    let sec = Math.floor(video.currentTime%60);
    if(sec < 10){
        sec = '0' + sec;
    }
    time.innerText = `${min}:${sec}`
}
function changingRange(){
    video.currentTime = (+range.value * video.duration) /100
}
// event listners
video.addEventListener('click', playAndStop);
play.firstElementChild.addEventListener('click', playAndStop);
stop.firstElementChild.addEventListener('click', stopAndBegin);
range.addEventListener('change', changingRange);
video.addEventListener('timeupdate', goRange);