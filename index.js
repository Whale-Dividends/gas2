
let lpgforms=document.getElementById("lpgformdiv");
let lpgform=document.getElementById("lpgform");
let pmsdiv=document.getElementById("pmsdiv");
let pmsform=document.getElementById("pmsform");
lpgforms.addEventListener("click",lpgclick);
pmsdiv.addEventListener("click",pmsdivclick);

let nameinput=document.getElementById("name");
let kgs=document.getElementById("kg");

function lpgclick(){
    if(lpgform.style.display=="none"){
     lpgform.style.display="block"
  

     if(nameinput.value==""||kgs.value==""){
       
      nextlpg.disabled=true;
    //   if(!nextlpg.classList.contains("disabled")){
    //       nextlpg.classList.add("disabled") 
    //   }
  }


          
     document.getElementById("pmsdiv").style.display="none";
   lpgform.style.animation="animate 2s"
     if(!lpgform.classList.add("lpgtra")){
      lpgform.classList.add("lpgtra")
     }
    
    }else{
         lpgform.style.display="none"
          
         document.getElementById("pmsdiv").style.display="block";  
    }
 }
 function pmsdivclick(){
    if(pmsform.style.display=="none"){
        pmsform.style.display="block"
       lpgforms.style.display="none";
       
       pmsform.style.animation="animate 2s"
     if(!pmsform.classList.add("lpgtra")){
      pmsform.classList.add("lpgtra")
     }
    }else{       
        pmsform.style.display="none";
          lpgforms.style.display="block";      
    }
    
 
 }
let fuelavalaible=document.getElementById("fuelavalaible");
let producta=document.getElementById("producta");
producta.addEventListener("click",productaclick)
function productaclick(){
   if(fuelavalaible.style.display=="none"){
      fuelavalaible.style.display="block"
   }else{
      fuelavalaible.style.display="none"
   }
}





