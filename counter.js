const dateEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minsEl = document.getElementById("mins");
const secondsEl = document.getElementById("seconds");

const newyear = "22 november 2021";


function countdown() {
    const newyeardate = new Date(newyear);
    const currentdate = new Date();
    const totalseconds = (newyeardate - currentdate) / 1000;
    const days = Math.floor(totalseconds / 3600 / 24);
    const hours = Math.floor(totalseconds / 3600) % 24;
    const minutes = Math.floor(totalseconds / 60) % 60;
    const seconds = Math.floor( totalseconds) % 60;
    // console.log(days, hours, minutes, seconds) 

    dateEl.innerHTML =formattime(days);
    hoursEl.innerHTML =formattime( hours);
    minsEl.innerHTML =formattime(minutes);
    secondsEl.innerHTML =formattime(seconds);
}

function formattime(time) {
    return time < 10 ? (`0${time}`) : time; 
    
}
//initial call
countdown();
setInterval(countdown,1000)
