let num1 = document.getElementById("num1");
let num2 = document.getElementById("num2");
let add = document.getElementById("add");
let subtract = document.getElementById("subtract");
let into = document.getElementById("into");
let divide = document.getElementById("divide");
let ans = document.getElementById("ans");

function fun_add() {
    let result = parseInt(num1.value) + parseInt(num2.value);
    ans.innerText = result;

}
add.onclick = fun_add()