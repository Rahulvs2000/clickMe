var count=1;
function Countme(){
  increment();
}

function increment(){
   var A = count++;
  var C = document.getElementById("par");
  C.innerHTML = A;
}
