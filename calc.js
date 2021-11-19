
let getInput = document.querySelector("#input");
let getHistory = document.querySelector("#output");
let operators = document.querySelectorAll(".operator");
let numbers = document.querySelectorAll(".number")


let inputs = "";
let calc;



for (let i = 0; i < operators.length; i++) {
    operators[i].onclick = function () {
        if (getInput.innerHTML == calc) {
            inputs = calc;
            getHistory.innerHTML = "";
        }

        inputs += this.id;
        getInput.innerHTML = inputs;
    }
    
}

for (let i = 0; i < numbers.length; i++) {
    numbers[i].onclick = function () {
        if (getInput.innerHTML == calc) {
            clearScreen();
        }
        inputs += this.innerHTML;
        getInput.innerHTML = inputs;
    }
    
}





function equate() {
    getHistory.innerHTML = inputs;
    calc = eval(inputs);
    getInput.innerHTML = calc;

}

function clearScreen() {
    inputs = "";
    getInput.innerHTML = "";
    getHistory.innerHTML = "";
}

function backSpace() {
    inputs = inputs.substr(0, inputs.length-1);
    getInput.innerHTML = inputs;
}











/*
 
 
\327   
\367





 */
