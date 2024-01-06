
// define variable
let startBtn = document.getElementById('start');
let stopBtn = document.getElementById('stop');
let clearBtn = document.getElementById('clear');
let appendMillSec = document.getElementById('millisecond');
let appendSec = document.getElementById('second');
let appendMinute = document.getElementById('minute');
let millisecond = 0;
let second = 0;
let minute = 0;
let timerId = null

// settimer method
const setTimer = () => {
    millisecond++
    if(millisecond<=9){
        appendMillSec.innerHTML = `0${millisecond}`
    }
    else if(millisecond>9){
        appendMillSec.innerHTML = millisecond
    }
    
    if (millisecond>99){
        second++
        appendSec.innerHTML = `0${second}`
        millisecond = 0
        appendMillSec.innerHTML = `0${millisecond}`
    }

    if(second>9){
        appendSec.innerHTML = second
    }

    if(second> 59){
        minute++
        appendMinute.innerHTML= `0${minute}`
        second = 0
        appendSec.innerHTML = `0${second}`
    }

    if(minute>9){
        appendMinute.innerHTML = minute
    }
}


// start button method
startBtn.addEventListener('click', ()=>{
    if(timerId !== null){
        clearInterval(timerId)
    }
    timerId = setInterval(setTimer, 10)
})

// stop button method
stopBtn.addEventListener('click', ()=>{
    clearInterval(timerId)
})

// clear button method
clearBtn.addEventListener('click', ()=>{
    clearInterval(timerId)
    millisecond = 0;
    second = 0;
    minute = 0;

    appendMillSec.innerHTML = `0${millisecond}`
    appendSec.innerHTML = `0${second}`
    appendMinute.innerHTML = `0${minute}`
})