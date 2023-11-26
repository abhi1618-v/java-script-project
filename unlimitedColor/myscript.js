// genertae randomcolor 
const randomColor = () => {
    const hexVal = "0123456789ABCDEF";
    let colorCode = "#";
    for(i = 0; i < 6; i++){
        colorCode += hexVal[Math.floor(Math.random()* 16)]
    } 
    return colorCode
}

// create a intervalId var
let intervalId;

// select peragraph 
const colorCode = document.getElementById('colorCode')

//  start button method
const startChangingColor = () => {
    const changingColor = () =>{
        document.querySelector('body').style.backgroundColor = randomColor()
        colorCode.innerHTML = `Color-Code: ${randomColor()}`
    }
    
    // condition 
    if(!intervalId){
        intervalId = setInterval(changingColor, 2000, false);
    }
}

// stop button method
const stopChangingColor = () => {
    clearInterval(intervalId)
    intervalId = null;
}

// select start button
document.getElementById('start').addEventListener('click', startChangingColor)

//  select stop button
document.getElementById('stop').addEventListener('click', stopChangingColor)



