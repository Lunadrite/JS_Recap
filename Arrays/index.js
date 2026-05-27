// A variable like structure that can hold more than 1 value.

// let fruits = ['apple', 'orange', 'bannana']; // Each value is called an element

// for(let i = 0; i < fruits.length; i++){
    // console.log(fruits[i]);
// }


//for(let fruit in fruits){
  //  console.log(fruits[fruit]);
//}
/*
fruits.push("coconut") // will add a fruit to the END of the array
fruits.pop() // remove last element
fruits.unshift("mango") // add one to end
fruits.shift(); // remove from start
*/

//window.alert(numOfFruits)

/*
while(numOfFruits != -1){
    window.alert(fruits[numOfFruits])
    numOfFruits--;

}
    */

// ---------------------        SPREAD OPERATORS- alows an iterable such as an array or string to be expanded [ ... ] (unpacks the elements of an array or string into individual values)---------------------  

let numbers = [1,2,3,4,5];
// let maximum = Math.max(numbers) // NAN but if we use spread with spread ...

/*
let maximum = Math.max(...numbers) // unpacks numbers into individual arguments for Math.max, which then returns the maximum value among them.
let minimum = Math.min(...numbers)
console.log(maximum) 
console.log(minimum) 
*/
console.log(Math.max(...numbers))

let username = "Luna Drite";
let letters = [...username] 

console.log(letters.join(''))
