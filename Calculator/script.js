let result = document.getElementById("result");
let expression = '';
let history = [];

function appendInput(input){
    expression += input;
    result.value = expression;
}

function modulus(){
    expression += '%';
    result.value = expression;
}

function expo(){

}

function reset(){
    expression = '';
    result.value = expression;
}

function backSpace(){
    expression = expression.slice(0, -1);
    result.value = expression;
}

function expo(num){
    if (num != undefined){
        expression += '**' + num;
    }
    else{
        expression += '**'; 
    }
    result.value = expression;
}

function squareRoot(){
    // Need to add Math.sqrt();
}

function previous(){
    if (history.length != 0){
        expression = history.pop();
        result.value = expression;
    } 
    else {
        expression = '';
        result.value = expression;
    }
}

function calculate(){
    let solution = eval(expression);
    result.value = solution;
    history.push(solution);
    expression = '';
}

// previous
// appendInput
// modulus
// expo
// clear
// backSpace
// cube
// square
// squareRoot
// calculate