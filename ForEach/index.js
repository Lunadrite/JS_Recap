let numbers = [1,2,3,4,5];

function Display(element){
    console.log(element);
}

numbers.forEach(Display);

function double(element, index, array){
    array[index] = element * 2;
}

function tripple(element, index, array){
    array[index] = element * 3;
}
console.log("\nDouble:")
numbers.forEach(double);
numbers.forEach(Display);
console.log("\nTripple:")
numbers.forEach(tripple);
numbers.forEach(Display);