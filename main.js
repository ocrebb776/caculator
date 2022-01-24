
 function extra() {
    document.getElementById("myNav").style.width = "100%";
  }
  
  function closeNav() {
    document.getElementById("myNav").style.width = "0%";
  }
 
 
 function aler(){
     alert("hello world!");
 }
 

function perof() {
    document.getElementById("percentageof").style.width = "100%";
  }
  
  function closeNavp() {
    document.getElementById("percentageof").style.width = "0%";
  }



 let current=0;
       let operation;
       let first;
       let m;







function save(){
    m=current;
}
function load(){
    current=m;
    document.getElementById('result').innerHTML = current;
}


function decimal(){
    current=current+'.';
     document.getElementById('result').innerHTML = current 
} 
function number(number){
     current=Number(current+String(number));
     document.getElementById('result').innerHTML = current

}
function negitive(){
    current-=current*2
    document.getElementById('result').innerHTML = current
}
function empty(){            
    current=0;
     operation=0;
    first=0;
     document.getElementById('result').innerHTML = 0;

}
function add(){
    first=current;
    operation = "add";
    document.getElementById('result').innerHTML = "+";
    current=0;
}
function sub(){
    first=current;
    operation = "sub";
    document.getElementById('result').innerHTML = "-";
    current=0;
}
function multi(){
    first=current;
    operation = "multi";
    document.getElementById('result').innerHTML = "*";
    current=0;
}
function div(){
    first=current;
    operation = "div";
    document.getElementById('result').innerHTML = "/";
    current=0;
}
function equals(){
    if (operation=="add") {
current=first+current;
    }else if(operation=="sub"){
        current=first-current;
    }else if(operation=="multi"){
        current=first*current;
    }else if(operation=="div"){
        current=first/current;
    }else{
        document.getElementById('result').innerHTML = "error pick operation";
    }
    document.getElementById('result').innerHTML = current;
        operation=0;
        first=0;
}



