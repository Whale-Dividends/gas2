let imagess=document.getElementById("imagess");
let generate=document.getElementById("generate");
let output="";
imagess.addEventListener("change",function(){
    let reader=new FileReader();
    reader.addEventListener("load",function(){
        output=reader.result;
        localStorage.setItem("store",output)
        // generate.style.backgroundImage=`url(${output})`
        if(output=true){
            output=generate.addEventListener("click",function(){
                location.assign("fuelavailable.html")
            })            
        }else{
            alert("please upload payment receipty")
        }      
        generate.style.backgroundImage=`url(${output})`
        console.log(generate)
    })
    reader.readAsDataURL(this.files[0]);  
})

document.addEventListener("DOMContentLoaded",function(){
   
})
let nextlpg=document.getElementById("nextlpg");
if(nameinput.value==""||kgs.value==""){
       
      nextlpg.disabled=true;
    //   if(!nextlpg.classList.contains("disabled")){
    //       nextlpg.classList.add("disabled") 
    //   }
  }



