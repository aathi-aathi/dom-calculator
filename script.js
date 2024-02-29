const result=document.getElementById("result");
function display(num){
   result.value+=num;
} 
function Calculate(){
   try{
      result.value=eval(result.value);
   }
   catch(err){
      alert("Only numbers are allowed")
   }
}
function Clear(){
   result.value=""
}
function Del(){
   result.value=result.value.slice(0,-1);
}