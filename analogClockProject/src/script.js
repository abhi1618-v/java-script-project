const hour = document.getElementById('hour');
const minute = document.getElementById('minute');
const second = document.getElementById('second');


const displayTime = () => {
    let date = new Date();
    
    let hh = date.getHours();
    let mm = date.getMinutes();
    let se = date.getSeconds();

    let hRotation = 30*hh + mm/2;
    let mRotation = 6*mm;
    let secRotation = 6*se;
   
    hour.style.transform = `rotate(${hRotation}deg)`
    minute.style.transform = `rotate(${mRotation}deg)`
    second.style.transform = `rotate(${secRotation}deg)`
        
}

setInterval(displayTime, 1000)
