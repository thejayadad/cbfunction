

let btn = document.getElementById("btn")
let result = document.getElementById("result");

function plus(x, y){
    return x + y;
}

function minus(x, y){
    return x - y;
}

add.addEventListener("click", function() {
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;
    let total = num1 + num2;
    result.innerText = total;



})