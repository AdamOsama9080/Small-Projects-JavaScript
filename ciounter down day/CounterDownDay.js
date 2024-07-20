let dayShow = document.querySelector(".day");
let hourShow = document.querySelector(".hour");
let minShow = document.querySelector(".min");
let secShow = document.querySelector(".sec");

let timeOfNewYear = "1 Jan 2023";

let Timer  = function(){
    let newYear = new Date(timeOfNewYear);
    // console.log(timeNow)
    let timeNow = new Date();
    // console.log(newYear-timeNow)
    let allSeconde = Math.floor((newYear-timeNow)/1000);
    // console.log(allSeconde)
    let day = Math.floor((allSeconde)/3600/24);
    let hour =Math.floor((allSeconde)/3600)%24;
    let min = Math.floor((allSeconde)/60)%60;
    let sec = Math.floor((allSeconde))%60;

    dayShow.innerHTML= day < 10 ? `0${day}`:day ;
    hourShow.innerHTML = hour <10 ? `0${hour}`:hour ;
    minShow.innerHTML = min <10 ?`0${min}` : min;
    secShow.innerHTML =  sec <10 ?`0${sec}` :sec;
}
Timer();
setInterval(Timer,1000);