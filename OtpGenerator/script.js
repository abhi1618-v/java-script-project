// select element
const inputField = document.getElementById('inputField');
const range = document.querySelector('#range')
const generatButton = document.getElementById('button');
const label = document.querySelector('label');
const copyButton = document.getElementById('copyButton')


range.addEventListener('input', () => {
    label.innerHTML = `Range: ${range.value}`
})

// otpgenerate method
const otpGenerate = () => {
    let otp = ''
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1236547890'
    for (let i = 0; i < range.value; i++) {
        char = Math.floor(Math.random() * str.length + 1)
        otp += str.charAt(char)
    }
    return otp;
}

// generate otp button method
const buttonHandler = () => {
    inputField.value = otpGenerate()
}

// copotp button method
const copyOtp = () => {
    if (inputField.value.length >=4){
        window.navigator.clipboard.writeText(inputField.value);
    } 
}

// otp generate button 
generatButton.addEventListener('click', buttonHandler)

// copy button
copyButton.addEventListener('click', copyOtp)

