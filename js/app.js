//generate pin and display it(pin)
function getPin() {
    const pin = Math.round(Math.random() * 10000);
    const pinString = pin + '';
    if (pinString.length == 4) {
        return pin;
    }
    else {
        return getPin();
    }
}
function generatePin() {
    const pin = getPin();
    document.getElementById('display-pin').value = pin; //j pin ta generate hobe ota display te show hobe.
}

document.getElementById('key-pad').addEventListener('click', function (event) {
    const number = event.target.innerText;
    const calc = document.getElementById('typed-numbers');
    const previousCalc = calc.value;
    const newCalc = previousCalc + number;
    calc.value = newCalc;
});
