// Method chaining = calling one method after another in one coninouse line of code
// 1. trim witespace, uppercase first letter, lowercase rest
let username = window.prompt("Enter your username: ")

// username = (username.trim().toLowerCase().charAt(0).toUpperCase() + username.slice(1)); // first try

username = username.trim().charAt(0).toUpperCase() + username.trim().slice(1).toLowerCase();

alert(username)

// Like a video game combo pretty cool.