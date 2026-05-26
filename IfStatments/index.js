// If true else false pretty simple/

const checkboxText = document.getElementById("checkboxtext")
const checkbox = document.getElementById("mycheckbox")

// document.getElementById(submit).onclick = function (){
    checkbox.onclick = function (){

    if(checkbox.checked){
        checkboxText.textContent = "This is checked"
    }else{
        checkboxText.textContent = ""
    }



}