function calculate() {
    var principal = Number(document.getElementById("principalInput").value);
    var investment = Number(document.getElementById("investmentInput").value);
    var rate = Number(document.getElementById("rateInput").value);
    var compounds = Number(document.getElementById("compoundInput").value);
    rate /= 100;
    rate += 1;
    console.log(rate);
    for (var i = 0; i < compounds; i++) {
        console.log(principal);
        principal *= rate;
        console.log(principal);
        principal += investment;
    }
    principal *= 10000;
    principal = Math.round(principal);
    principal /= 10000;
    const textBox = document.getElementById("outBox");
    textBox.textContent = principal;
}