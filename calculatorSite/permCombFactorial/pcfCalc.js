function calculate() {
    const dropdown = document.getElementById("dropdown");
    var input = dropdown.value;
    const outBox = document.getElementById("outBox");
    var n = Number(document.getElementById("nInput").value);
    var r = Number(document.getElementById("rInput").value);
    var x = Number(document.getElementById("xInput").value);
    var result;
    var temp1;
    if (input == "") {
        outBox.textContent = "Please Select an Option in the Dropdown before calculating.";
    }
    else if (input == "0") {
        result = factorial(n);
        console.log(result);
        temp1 = n-r;
        console.log(temp1);
        temp1 = factorial(temp1);
        console.log(temp1);
        result /= temp1;
    }
    else if (input == "1") {
        result = factorial(n);
        temp1 = n-r;
        temp1 = factorial(temp1);
        temp1 *= factorial(r);
        result /= temp1;
    }
    else {
        result = factorial(x);
    }
    outBox.textContent = result;
}

function factorial(f) {
    var result = 1;
    for (var i = 1; i <= f; i++) {
        result *= i;
    }   
    return result;
}

function hideRedundant() {
    const dropdown = document.getElementById("dropdown");
    var input = dropdown.value;
    const xInput = document.getElementById("xInput");
    const nInput = document.getElementById("nInput");
    const rInput = document.getElementById("rInput");
    const outBox = document.getElementById("outBox");
    outBox.textContent = "Output Appears Here";
    if (input == "") {

    }
    else if (input == "0" || input == "1") {
        nInput.style.display = 'initial';
        rInput.style.display = 'initial';
        xInput.style.display = 'none';
    }
    else {
        nInput.style.display = 'none';
        rInput.style.display = 'none';
        xInput.style.display = 'initial';
    }
}