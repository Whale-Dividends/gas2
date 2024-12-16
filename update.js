
let update=document.getElementById("updates");
update.addEventListener("click",upbtn);
let inputgas=document.getElementById("inputgas");
let fuelinput=document.getElementById("fuelinput");
function upbtn(){
     localStorage.setItem("inputvalue",inputgas.value)
     localStorage.setItem("fuelputs",fuelinput.value)
}
let Next=document.getElementById("Next1");
let next2=document.getElementById("Next2")
let form2=document.getElementById("form2");
let form1=document.getElementById("form1");
Next.addEventListener("click",nextsubmitall);
let prints=document.getElementById("print")
prints.addEventListener("click",printsclick);



function nextsubmitall(e){
     e.preventDefault()
     if(form2.style.display=="none"){
          form2.style.display="block"  
     }else{
          form2.style.display="none"  
     }
}

