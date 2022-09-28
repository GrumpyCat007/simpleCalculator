const updateScreen = (value)=>{
    document.getElementById("screen").value+=value;
    document.getElementById("enteredDigit").value = value;
}

const clearScreen = ()=>{
    document.getElementById("screen").value="";
    document.getElementById("enteredDigit").value="0";
}

const result = ()=>{
   var val = document.getElementById("screen").value;
   document.getElementById("screen").value = val+'='+ eval(val);
   document.getElementById("enteredDigit").value=eval(val);
}