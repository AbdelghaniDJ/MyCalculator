let input = [];

function addition(){
    
    input.push("+");
    document.getElementById("result").value = input.join("") ;

   
    
    
}
function multiplication(){
    input.push("*");
    document.getElementById("result").value =  input.join("")  ;
}

function seven(){
    input.push("7");
    document.getElementById("result").value =  input.join("")  ;
    
}
function sub(){
    input.push("-");
    document.getElementById("result").value =  input.join("")  ;
    
}
function eight(){
    input.push("8");
    document.getElementById("result").value =  input.join("")  ;
    
}
function nine(){
    input.push("9");
    document.getElementById("result").value =  input.join("")  ;
    
}
function four(){
    input.push("4");
    document.getElementById("result").value =  input.join("")  ;
    
}
function three(){
    input.push("3");
    document.getElementById("result").value =  input.join("")  ;
    
}
function two(){
    input.push("2");
    document.getElementById("result").value =  input.join("")  ;
    
}
function five(){
    input.push("5");
    document.getElementById("result").value =  input.join("")  ;
    
}
function zero(){
    input.push("0");
    document.getElementById("result").value =  input.join("")  ;
    
}
function one(){
    input.push("1");
    document.getElementById("result").value =  input.join("")  ;
    
}
function four(){
    input.push("4");
    document.getElementById("result").value =  input.join("")  ;
    
}
function division(){
    input.push("/");
    document.getElementById("result").value =  input.join("")  ;
    
}
function six(){
    input.push("6");
    document.getElementById("result").value =  input.join("")  ;
    
}
function reset(){
    input.length = 0;
    document.getElementById("result").value =  input.join("")  ;

}
function equal(){
    
     document.getElementById("result").value = eval(document.getElementById("result").value);
     
 }



