const textField = document.querySelector(".text-box")

function acHandler() { 
    // console.log("AC IS Clicked");
    textField.value = '';
}
function sevenHandler() {
    textField.value += 7;
}
function eightHandler() {
    textField.value += 8;
}
function nine() {
    textField.value += 9;
}
function six() {
    textField.value += 6;
}
function five() {
    textField.value += 5;
}
function four() {
    textField.value += 4;
}
function three() {
    textField.value += 3;
}
function two() {
    textField.value += 2;
}
function one() {
    textField.value += 1;
}
function zerozero() {
    textField.value += '00';
}
function zero(){
    textField.value += 0;
}
function dot() {
    textField.value += '.';
}
function plus() {
    textField.value += '+'
}
function minus() {
    textField.value += '-'
}
function multiply() {
    textField.value += '*'
}
function ceHandler() {
    textField.value = textField.value.toString().slice(0 ,-1)
}
function evaluateMaths() {
    textField.value = eval(textField.value); 
}