let inputVal=document.getElementById("text-box")
function display(num)
{
 inputVal.value+=num
}
function Clear(num)
{
   inputVal.value=" "
}
function Delete(num)
{
  inputVal.value=inputVal.value.slice(0,-1)
}
function Equal(num)
{
   try{
      inputVal.value=eval(inputVal.value)
   }
   catch(err)
   {
      inputVal.value="syntax error"
   }
}