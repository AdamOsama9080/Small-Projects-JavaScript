// console.log("hello world")
let passwordText = document.querySelector(".pass");
let passwordLengthInput = document.querySelector(".slider");
let upperCaseOption = document.querySelector(".upper");
let lowerCaseOption = document.querySelector(".lower");
let numberOption = document.querySelector(".number");
let symbolOption = document.querySelector(".symbol");
let generatePasswordBtn = document.querySelector(".generate")
let copyBtn = document.querySelector(".fa-regular")
// console.log(symbolOption.checked)
// console.log(passwordLengthInput.value)

let upperLetter = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let lowerLetter = "abcdefghijklmnopqrstuvwxyz";
let NumberNUm = "0123456789";
let specialLetter = "~!@#$%^&*()_+*/-?<>{}[]=";

// console.log(passwordLengthInput.value)
// console.log(generatePasswordBtn)

function getRandomUpperLetter(){
    return upperLetter[Math.floor(Math.random()*upperLetter.length)];
    // console.log(upperLetter[Math.floor(Math.random()*upperLetter.length)])
}

function getRandomLowerLetter(){
    return lowerLetter[Math.floor(Math.random()*lowerLetter.length)];
    // console.log(lowerLetter[Math.floor(Math.random()*lowerLetter.length)])
}

function getRandomNumberNum(){
    return NumberNUm[Math.floor(Math.random()*NumberNUm.length)];
    // console.log(NumberNUm[Math.floor(Math.random()*NumberNUm.length)])
}

function getRandomSpecialLetter(){
    return specialLetter[Math.floor(Math.random()*specialLetter.length)];
}

function passwordGenerator(){
    let pass = " "; 
    let passwordLength = passwordLengthInput.value;
    for( i=0 ; i<passwordLength ; i++){
        let letterpass = checked()
        pass += letterpass
    }
    passwordText.innerHTML = "";
    passwordText.innerHTML = pass;
}

function checked (){
    if(passwordLengthInput.value>20 || passwordLengthInput.value<5){
        passwordText.innerHTML = "Plz choose from 5 to 20 letter"
    }
    let letter = [];
    if(upperCaseOption.checked){
        // console.log(true)
        letter.push(getRandomUpperLetter())
    }
    if(lowerCaseOption.checked){
        letter.push(getRandomLowerLetter())
    }
    if(symbolOption.checked){
        letter.push(getRandomSpecialLetter())
    }
    if(numberOption.checked){
        letter.push(getRandomNumberNum())
    }else{
        passwordText.innerHTML = "plz check at lest one from options"

    }
    return letter[Math.floor(Math.random()*letter.length)]
}

generatePasswordBtn.onclick = function(){
    passwordGenerator()
    console.log(passwordText.innerHTML)
    copyBtn.onclick = function() {
        copyBtn.classList.add("clr")
        const textarea = document.createElement("textarea");
        const pass = passwordText.innerHTML;
        if (!pass) {
            return;
        }
        textarea.value = pass;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand("copy");
        textarea.remove();
        alert("Password copied to clipboard");
        copyBtn.classList.add("clr-two")
    }
}


