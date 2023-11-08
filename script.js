const numBtn = document.querySelectorAll('.num-button');
const opBtn = document.querySelectorAll('.op-button');
const eqBtn = document.getElementById('equals');
const clearBtn = document.getElementById('clear');
let currentScreenDisplay = document.getElementById('currentScreen')
let lastScreenDisplay = document.getElementById('lastScreen')
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

let numOne = '';
let numTwo = '';
let operator = '';


const addToScreen = function(btnInput){
    if (currentScreenDisplay.textContent === '0'){
        currentScreenDisplay.textContent = '';
    };
    currentScreenDisplay.textContent += btnInput;
};

const clearScreen = function(){
    currentScreenDisplay.textContent = '0';
}


const operand = function(btnInput){
    if (currentScreenDisplay.textContent != 0 ){
        lastScreenDisplay = currentScreenDisplay.textContent;
        currentScreenDisplay.textContent = lastScreenDisplay + btnInput; 
    }
}

const evaluate = function(screenInput){

}

clearBtn.addEventListener('click', clearScreen);

// equalsBtn.addEventListener('click', ()=> evaluate)

numBtn.forEach((button)=>button.addEventListener('click', ()=>{
        addToScreen(button.textContent);
    })
);

opBtn.forEach((button)=>button.addEventListener('click', ()=>{
    operand(button.textContent);
})
);


const operate = function(a, b, operator){

    a = Number(a)
    b = Number(b)
    switch(operator) {
        case '+':
            return add(a,b);
            break;
        case '-':
            return subtract(a,b);
            break;
        case '*':
            return multiply(a, b);
            break;
        case '/':
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

