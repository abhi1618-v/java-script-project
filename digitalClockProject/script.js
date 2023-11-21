const clock = document.querySelector("#clock")

const inputDate = document.querySelector('#date')


setInterval(function(){
    let date = new Date();
    clock.innerHTML = date.toLocaleTimeString();
    inputDate.innerHTML = date.toDateString();
}, 1000)



