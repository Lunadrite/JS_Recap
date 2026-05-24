
const PI = Math.PI
let radius;

function area()
{
    radius = Number(document.getElementById("rad").value);
    document.getElementById("area").textContent = (`${PI*Math.pow(Number(radius), 2)}`);
}
