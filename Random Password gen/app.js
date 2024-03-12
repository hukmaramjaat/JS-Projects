const passgen = document.getElementById("inputarea");
const lenght = 12;
const generateBtn = document.getElementById("button");
const copypass = document.getElementById("copyPass");

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "012345689";
const symbol = "!@#$%^&*()-_=+\|]}[{";
const allChars = upperCase + lowerCase + number + symbol;

function createPassword(){
    let password = "";
    password += upperCase[Math.floor(Math.random() * upperCase.length)];
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    password += number[Math.floor(Math.random() * number.length)];
    password += symbol[Math.floor(Math.random() * symbol.length)];
    
    while(lenght > password.length){
        password += allChars[Math.floor(Math.random() * allChars.length)];
    }
    passgen.value = password;
}
generateBtn.addEventListener('click',createPassword);

function copyPassword(){
    passgen.select();
    document.execCommand("copy");
}
copypass.addEventListener('click', copyPassword);
