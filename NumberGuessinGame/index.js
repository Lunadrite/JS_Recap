const MIN = Number(window.prompt(`What do you want the min number to be (recommended 1)`));
const MAX = Number(window.prompt(`What do you want the Max number to be (recommended 100)`));
const MAXGUESSES = Number(window.prompt(`How many guesses do you want? (blank for infinite)`));
const RANDOMNUMBER = Math.floor(Math.random() * (MAX - MIN) + MIN) +1 ;



let running = true;
let attempt = 0;

while (running)
{
    attempt++;
    let userguess = window.prompt(`Take a guess between ${MIN} -> ${MAX}!`);
    if (userguess == RANDOMNUMBER)
    {
        window.alert(`YOU WIN WOAH, AND ON ATTEMPT ${attempt}`)
        running = false;
    }else{
        if(userguess>RANDOMNUMBER){
            window.alert("Your guess was to high.")
        }else{
            window.alert("Your guess was too low.")
        }
    }

    if(MAXGUESSES == attempt)
    {
        window.alert(`Sorry you lost!`)
        running = false;
    }

}