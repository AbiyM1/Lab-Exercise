
function add() {

    var numberArray = [];



    let sum = 0;
    for (let i = 0; i < parseInt(input); i++) {
        numberArray[i] = parseInt(prompt("Enter the numbers: " + (i + 1)));
    }

    for (let i = 0; i < numberArray.length; i++) {
        sum += numberArray[i];
    }
    return sum;

}

function subtract(firstNum, secondNum) {
    
    return firstNum - secondNum;

}

function multiply() {

    var numberArray = [];



    let product = 1;
    for (let i = 0; i < parseInt(input); i++) {
        numberArray[i] = parseInt(prompt("Enter the numbers: " + (i + 1)));

    }

    for (let i = 0; i < numberArray.length; i++) {
        product *= numberArray[i];

    }
    return product;

}

function divide(firstNum, secondNum) {

    if (secondNum != 0) {
        return firstNum / secondNum;
    }
    else{
        return "Denominator must be different from 0";
    }

}






(function () {

    operator = prompt("Which operator do you want to use: + - * /");

    switch (operator) {
        case "/":
            var firstNum = prompt("Enter the first Number: ");
            var secondNum = prompt("Enter the second Number: ");
            console.log(divide(firstNum, secondNum));
            break;
        case "-":
            var firstNum = parseInt(prompt("Enter the first Number: "));
            var secondNum = parseInt(prompt("Enter the second Number: "));
            console.log(subtract(firstNum, secondNum));
            break;
        case "+":
            input = prompt("How many numbers do you want to input? ");
            console.log(add());
            break;
        case "*":
            input = prompt("How many numbers do you want to input? ");
            console.log(multiply());
            break;

        default:
            alert("Please select one of the four operators: + - * /");

    };



})();