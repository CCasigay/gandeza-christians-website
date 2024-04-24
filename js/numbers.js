function number(num) {
    var textbox = document.getElementById('number-input');
    var current = textbox.value;

    if(current == 0) {
        textbox.value = num;
    }

    else {
        textbox.value = current + num;
    }
}
function clearInput() {
    var numberInput = document.getElementById('number-input');
    var previousInput = document.getElementById('previous');
    var operationInput = document.getElementById('operation-input');
    
    numberInput.value = '';
    previousInput.value = '';
    operationInput.value = '';
}