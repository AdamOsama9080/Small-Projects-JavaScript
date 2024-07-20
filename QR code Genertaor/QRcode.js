console.log("Qr Coode")

let  genrateBtn = document.querySelector(".genrate-btn")
let img  = document.querySelector(".img");
let input = document.querySelector("input");
let Qr = document.querySelector(".img .qr")

genrateBtn.onclick = function(){
    input=input.value
    console.log(input)
    if(!input) {
        return"";
    }else{
        input=input.value
        console.log(input)
        Qr.src = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${input}`

    }

    img.classList.add("active")
}