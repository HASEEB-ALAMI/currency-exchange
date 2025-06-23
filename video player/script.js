const video = document.getElementById('video');
const play = document.getElementById('btn1');
const stop = document.getElementById('btn2');
const range = document.getElementById('range');
const time = document.getElementById('time');
function playAndStop(){
    if(video.paused){
        video.play();
        play.firstElementChild.className = "fa fa-pause";
        setInterval(rangeGoing, 100);
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
function rangeGoing(){
    range.value = video.currentTime;
    if(range.value < 10){
        time.innerText = "0" + Math.floor(range.value);
    }else{
        time.innerText = Math.floor(range.value);
    }
}
// event listners
video.addEventListener('click', playAndStop);
play.firstElementChild.addEventListener('click', playAndStop);
stop.firstElementChild.addEventListener('click', stopAndBegin);
range.addEventListener('change', changingRange);