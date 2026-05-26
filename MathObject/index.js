
const PI = Math.PI
let radius;

function areaCalc()
{
    radius = Number(document.getElementById("radius").value);
    document.getElementById("area").textContent = (`${PI*Math.pow(radius, 2)}`);
}
