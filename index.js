let documentStyleSheet = document.querySelector("#pageStyle");
let generateBtn = document.querySelector(".generate-btn");
let toggleBtn = document.querySelector(".theme-toggle");
let boxOne = document.querySelector(".box-one");
let boxTwo = document.querySelector(".box-two");

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

let charLength = characters.length

let generatePassword = () => {
    let passwordFirst = passwordSecond = "";

    for(let i=0;i<15;i++){
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