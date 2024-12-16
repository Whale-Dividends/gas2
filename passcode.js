function code2(){
    let addmingform=document.getElementById("addmingform");
    addmingform.onsubmit=(e)=>{
   
       e.preventDefault()
   let paascode=addmingform["passcode"]
   if(paascode.value=="admincodepassword"){
      location.assign("fuelavailable.html")
   }else{
     document.getElementById("error").innerText="wrong password"  
   }
   }
 }
 code2()

