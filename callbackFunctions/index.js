// callback a functionthat is apssed as an argument to anither function

/*
used to handle asynchronous operations:
1) reading a file
2) network requests
3) interacting with database

"When you are done call this next."

*/

hello(goodbye);

function hello(callback){
    console.log("Hello");
    callback();
}

function goodbye(){
    console.log("Goodbye");
}
