const add = function(a,b){
    return a+b;
};

const subtract = function(a, b){
    return a - b;
};

const multiply = function(a, b){
    return a*b;
};

const divide = function(a, b){
    return a / b;
};

let numOne = 1;
let numTwo = 2;
let operator = '+';

const buttons = document.querySelectorAll('button');

buttons.forEach((button)=> button.addEventListener('click') )