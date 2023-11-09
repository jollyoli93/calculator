const numBtn = document.querySelectorAll('.num-button');
const opBtn = document.querySelectorAll('.op-button');
const equalsBtn = document.getElementById('equals');
const clearBtn = document.getElementById('clear');
const screenButtons = document.querySelector(".numbers-container");
let currentScreenDisplay = document.getElementById('currentScreen')
let previousScreenDisplay = document.getElementById('previousScreen')
// let displayNum1 = document.getElementById('display1');
// let displayNum2 = document.getElementById('display2');
// let displayOp = document.getElementById('op');

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

let numOne = 0;
let numTwo = 0;
let operator;


const addToScreen = function(btnInput){
    if (currentScreenDisplay.textContent === '0'){
        currentScreenDisplay.textContent = '';
    };
    currentScreenDisplay.textContent += btnInput;
};

const clearScreen = function(){
    currentScreenDisplay.textContent = '0';
    numOne = 0;
    numTwo = 0;
    operator = undefined;
}

const operand = function(btnInput){
    if (currentScreenDisplay.textContent === 0 && operator != undefined) return

        previousScreenDisplay = currentScreenDisplay.textContent;
        currentScreenDisplay.textContent = '';
        operator = btnInput;
};

clearBtn.addEventListener('click', clearScreen);


equalsBtn.addEventListener('click', ()=> {
    currentScreenDisplay.textContent = operate(previousScreenDisplay, currentScreenDisplay.textContent, operator);
});

screenButtons.addEventListener('click', (event)=>{
    addToScreen(event.target.textContent);
    console.log(event.target.textContent)

});

opBtn.forEach((button)=>button.addEventListener('click', ()=>{
        operand(button.textContent);
        console.log(button.textContent);
    })
);


const operate = function(a, b, operator){

    console.log(a,b,operator)
    a = Number(a)
    b = Number(b)
    switch(operator) {
        case '+':
            return add(a,b);
            break;
        case '-':
            return subtract(a,b);
            break;
        case 'x':
            return multiply(a, b);
            break;
        case '%':
            if (b === 0) return null
            else return divide(a,b);
            break;
        default:
            return null
    }
};


// seperate each type of input into seperate eventlistners
//e.g. number, operator, equals, clear.





// const buttons = document.querySelectorAll('.button');
// buttons.forEach((button)=> button.addEventListener('click', ()=>{
//         let calcBtn = parseInt(button.textContent);
//         
//     })
// );

