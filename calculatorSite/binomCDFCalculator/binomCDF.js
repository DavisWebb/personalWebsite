function calculate() {
    var cInput = Number(document.getElementById("cInput").value);
    var res = 0;
    for (var i = cInput; i >= 0; i--) {
        res += binomCDF(i);
        console.log(res);
    }
    res *= 100;
    const outBox = document.getElementById("outBox");
    outBox.textContent = res + "% Probability that the given # of trials, with the given probability of success per trial, will result in C successes or less.";
}

function binomCDF(cInput) {
    var nInput = Number(document.getElementById("nInput").value);
    var pInput = Number(document.getElementById("pInput").value);
    var nFac = factorial(nInput);
    cFac = factorial(cInput);
    var result = nFac;
    var temp = cFac;
    var nMinusC = nInput-cInput;
    temp *= factorial(nMinusC);
    result /= temp;
    result *= Math.pow(pInput, cInput);
    var rightTerm = 1-pInput;
    rightTerm = Math.pow(rightTerm, nInput-cInput);
    result *= rightTerm;
    return result;
}

function factorial(f) {
    var result = 1;
    for (var i = 1; i <= f; i++) {
        result *= i;
    }   
    return result;
}