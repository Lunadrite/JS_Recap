// parameter with 3 dots budling them with an array, ...

// spread = expands an array into seperate elements
// rest = bundles seperate elements into an array

// does the oppopsite

function openFridge(...foods){
    console.log(...foods);
}

const food1 = "pizza"
const food2 = "hamburger"
const food3 = "sushi"
const food4 = "hotdog"

let running = true;

openFridge(food1,food2,food3,food4)


function sum(...numbers){
   let reuslt = 0;
   for(let number of numbers){
    reuslt += number;
   }
   return reuslt;
}
let usernums = [];

while(running){
    usernum = window.prompt("Please add the numbers you wish to add together! if you wish to stop enter `esc`");
    if(usernum == "esc"){
        running=false;
        break;
    }else{
        usernums = [...usernums, Number(usernum)]

    }
}

console.log(`Total: $${sum(...usernums)}`);