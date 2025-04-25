function calculate() {
    var a = Number(document.getElementById("aInput").value);
    var b = Number(document.getElementById("bInput").value);
    var c = Number(document.getElementById("cInput").value);
    var bSquare = b*b;
    var fourAC = 4*a*c;
    var twoA = 2*a;
    var negB = b*(-1);
    var underRootTerm = bSquare-fourAC;
    var squareOne;
    var squareTwo;
    var rightTerm;
    const textBox = document.getElementById("outBox");
    if (underRootTerm > 0) {
        rightTerm = Math.sqrt(underRootTerm);
        rightTerm /= twoA;
        negB /= twoA;
        rightTerm *= 100000;
        rightTerm = Math.round(rightTerm);
        rightTerm /= 100000;
        squareOne = negB + rightTerm;
        squareTwo = negB - rightTerm;
        textBox.innerText = "x = " + squareOne + " and x = " + squareTwo;
    }
    else {
        underRootTerm = Math.abs(underRootTerm);
        console.log(underRootTerm);
        rightTerm = Math.sqrt(underRootTerm);
        rightTerm /= twoA;
        negB /= twoA;
        rightTerm *= 100000;
        rightTerm = Math.round(rightTerm);
        rightTerm /= 100000;
        textBox.innerText = "x = " + negB + " + " + rightTerm + "i and x = " + negB + " - " + rightTerm + "i";
    }
}