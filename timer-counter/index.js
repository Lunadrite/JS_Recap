let currentCounter = 0;
const CurrentCounterText = document.getElementById("CurrentCount");
const plusBtn = document.getElementById("plus");
const minusBtn = document.getElementById("minus");
const resetBtn = document.getElementById("reset");


plusBtn.onclick = () =>{
    Plus();
}
minusBtn.onclick = () =>{
    Minus();
}
resetBtn.onclick = () =>{
    Reset();
}

function Plus()
{
    currentCounter++;
    RefreshNumber();
}
function Minus()
{
    currentCounter--;
    RefreshNumber();
}
function Reset()
{
    currentCounter = 0;
    RefreshNumber();
}

function RefreshNumber()
{
    CurrentCounterText.textContent = (`${currentCounter}`);
}