
function get(){   
document.addEventListener("DOMContentLoaded",loading);
function loading(){
    let yegas=document.getElementById("yegas");
    yegas.innerText=localStorage.getItem("inputvalue") 

    let fuelno2=document.getElementById("fuelno2");
fuelno2.innerText=localStorage.getItem("fuelputs")
}
}
get()




