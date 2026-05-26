const submit = document.getElementById("submit")
const tempoutput = document.getElementById("tempoutput")



function tempritecalc(){
    let F2C = document.getElementById("F2C").checked
    let C2F = document.getElementById("C2F").checked
    let temp = Number(document.getElementById("temp").value);


    if(F2C && C2F){return "Please only select one conversion method.";} 
    else if(C2F){return Number((temp*9/5)+32);} 
    else if(F2C){return Number((temp-32)*5/9);}
    else{return "Enter a valid num" }

}

function Tempoutput(){
    tempoutput.textContent = tempritecalc();
}