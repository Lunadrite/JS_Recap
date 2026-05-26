
let coins = 0;
let clickUpgrade = 1;
let clickUpgradeCost = 20;
let autoclickerUpgrade = 0;
let autoclickerUpgradeCost = 10;
let userName;

const autoClickerTimer = 3000; //every 3 seconds in set interval

document.getElementById("myB1").onclick = () =>{Coinclick()};
document.getElementById("myB2").onclick = () =>{Upgradeclick()};
document.getElementById("mySubmits").onclick = () =>{userInput()};
document.getElementById("myB3").onclick = () =>{Upgradeautoclicker()};





function userInput()
{
    userName = document.getElementById("Username").value;
    document.getElementById("userNameDisplay").textContent =`Welcome to the clicker game ${userName}`;
}

function Coinclick()
{
    coins+= clickUpgrade;
    Coinupdate();
}
function Coinupdate()
{
    document.getElementById("myB1").textContent =`${coins}`;
}

function Upgradeautoclicker()
{
    if(coins >= autoclickerUpgradeCost)
    {
        coins -= autoclickerUpgradeCost;
        Coinupdate();
        autoclickerUpgrade++;
        autoclickerUpgradeCost = Math.round(autoclickerUpgradeCost * 1.5); 
        document.getElementById("myB3").textContent =
        `Autoclicker Upgrade:${autoclickerUpgrade}
        Cost:${autoclickerUpgradeCost}`;
    }
    else{
        document.getElementById("myB3").style.color = "red";
        setTimeout(() => document.getElementById("myB3").style.color = "black", 1000);
        
        
    }
}

function Upgradeclick()
{ 
    if(coins >= clickUpgradeCost)
    {
        coins = coins - clickUpgradeCost;
        Coinupdate();
        clickUpgrade++;
        clickUpgradeCost= Math.round(clickUpgradeCost * 1.5); 
        document.getElementById("myB2").textContent =
        `Click Upgrade:${clickUpgrade}
        Cost:${clickUpgradeCost}`;
    }
    else{
        document.getElementById("myB2").style.color = "red";
        setTimeout(() => document.getElementById("myB2").style.color = "black", 1000);
        
        
    }
        
    
}
const autoClicker = () => {
    coins +=autoclickerUpgrade;
    Coinupdate();
};
setInterval(autoClicker, autoClickerTimer); 