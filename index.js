const updateScreen = (value)=>{
    document.getElementById("screen1").value+=value;
    document.getElementById("screen2").value = value;
}

const clearScreen = ()=>{
    document.getElementById("screen1").value="";
    document.getElementById("screen2").value="0";
}

const result = ()=>{
   var val = document.getElementById("screen1").value;

   if (val == ""){
        document.getElementById("screen1").value = "NaN";
        document.getElementById("screen2").value ="NaN";
   }else{
        document.getElementById("screen1").value = val +'=' + eval(val);
        document.getElementById("screen2").value = eval(val);
   }

}