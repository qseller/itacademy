function multi(){
    let num1 = document.getElementById('num1').value;
    console.log(num1);
    let num2 = document.getElementById('num2').value;
    console.log(num2);
    let res = num1*num2;
    let result = document.getElementById('result');
    result.innerHTML = res;
    console.log(result);
    
}
function del(){
    let num1 = document.getElementById('num1').value; 
    let num2 = document.getElementById('num2').value;
    document.getElementById('result').innerHTML = num1/num2;
}
