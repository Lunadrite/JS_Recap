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

openFridge(food1,food2,food3,food4)


function sum(...numbers){
   let reuslt = 0;
   for(let number of numbers){
    reuslt += number;
   }
   return reuslt;
}

const total = sum(1,2,3,5,6,7,8,5,3,3)
console.log(total);