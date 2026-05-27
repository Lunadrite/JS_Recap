const lengthofpassword = Number(window.prompt(`How long do you want your password?`));

let randomnumber;
let passwordlength;
let randomChar;
let password = [];

let passwordChars = [
    "a","b","c","d","e","f","g","h","i","j","k","l","m",
    "n","o","p","q","r","s","t","u","v","w","x","y","z",

    "A","B","C","D","E","F","G","H","I","J","K","L","M",
    "N","O","P","Q","R","S","T","U","V","W","X","Y","Z",

    "0","1","2","3","4","5","6","7","8","9",


];


function randomnumberGenerator(){
    randomnumber = Number(Math.floor(Math.random() * (passwordChars.length)));
    return randomnumber;

}

function randomcharecterGenerator(){
    randomChar = passwordChars[randomnumberGenerator()];
    return randomChar;

}

for(let i =0; i < lengthofpassword;i++){
    password.push(randomcharecterGenerator());
}

let Fullpassword = [...password] 

console.log(Fullpassword.join(''))
