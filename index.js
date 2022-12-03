let documentStyleSheet = document.querySelector("#pageStyle");
let generateBtn = document.querySelector(".generate-btn");
let toggleBtn = document.querySelector(".theme-toggle");
let boxOne = document.querySelector(".box-one");
let boxTwo = document.querySelector(".box-two");
let copyBtn1 = document.querySelector(".copy-btn1");
let copyBtn2 = document.querySelector(".copy-btn2");
let inputLength = document.querySelector(".input-length");
let errorMsg = document.querySelector(".error-msg");
let passwordLength = inputLength.value;

//set password length
inputLength.addEventListener("change", () => {
    inputLength.value > 15 ? (inputLength.value = 15 ,errorMsg.textContent = "Enter Length <=15"):
                             inputLength.value < 1 ?
                             (inputLength.value = 1, errorMsg.textContent = "Enter Length >1"):
                             (inputLength, errorMsg.textContent = "Thanks! 😊");

    passwordLength = inputLength.value;
})


let theme = "dark";

//theme toggle
toggleBtn.addEventListener("click", () => {

    switch (theme) {
        case "dark": documentStyleSheet.setAttribute("href", "/stylesheets/style-dark-theme.css")
            break;

        case "light": documentStyleSheet.setAttribute("href", "/stylesheets/style.css");
            break;

        default: documentStyleSheet.setAttribute("href", "/stylesheets/style-dark-theme.css")
            break;
    }
    theme === "dark" ? theme = "light" : theme = "dark";

})

//password generation
const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let charLength = characters.length;

let generatePassword = () => {
    let passwordFirst = passwordSecond = "";

    for(let i=0;i<passwordLength;i++){
        let randomNumFirst = Math.floor(Math.random()*charLength);
        let randomNumSecond = Math.floor(Math.random()*charLength);

        passwordFirst += characters[randomNumFirst];
        passwordSecond += characters[randomNumSecond];
    }

    boxOne.textContent = passwordFirst;
    boxTwo.textContent = passwordSecond;

}

generateBtn.addEventListener("click",() => {
    generatePassword();
})

//copy password
copyBtn1.addEventListener("click",() => {
    navigator.clipboard.writeText(boxOne.textContent);
})

copyBtn2.addEventListener("click",() => {
    navigator.clipboard.writeText(boxOne.textContent);
})
