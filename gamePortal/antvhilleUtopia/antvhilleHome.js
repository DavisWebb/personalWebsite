const book = document.getElementById("bookContainer");
const body = document.getElementById("body");
const bodyWidth = window.innerWidth;

const d1ab = document.getElementById("ab1-left");
const d2ab = document.getElementById("ab2-left");
const d3ab = document.getElementById("ab3-left");
const d4ab = document.getElementById("ab4-left");
const d5ab = document.getElementById("ab5-left");

const d1abr = document.getElementById("ab1-right");
const d2abr = document.getElementById("ab2-right");
const d3abr = document.getElementById("ab3-right");
const d4abr = document.getElementById("ab4-right");
const d5abr = document.getElementById("ab5-right");

const d1rb = document.getElementById("rb1-left");
const d2rb = document.getElementById("rb2-left");
const d3rb = document.getElementById("rb3-left");
const d4rb = document.getElementById("rb4-left");
const d5rb = document.getElementById("rb5-left");

const d1rbr = document.getElementById("rb1-right");
const d2rbr = document.getElementById("rb2-right");
const d3rbr = document.getElementById("rb3-right");
const d4rbr = document.getElementById("rb4-right");
const d5rbr = document.getElementById("rb5-right");

function closeBook() {
    book.style.display = "none";
}

function openBook() {
    book.style.display = "block";
    closeDebtManager();
}

setInterval(variance2, 1000);
setInterval(adjustRates, 1001);

const constant = document.getElementById("anthill-img-3");
const nab = document.getElementById("nab-left");
const nabr = document.getElementById("nab-right");

function variance2() {
    var ran1;
    var ran2;
    var currAdj;
    var currAdj2;
    var currWid;
    ran1 = Math.random();
    if (ran1 <= 0.1) {
        currAdj = d1ab;
        currAdj2 = d1abr;
    }
    else if (ran1 <= 0.2) {
        currAdj = d2ab;
        currAdj2 = d2abr;
    }
    else if (ran1 <= 0.3) {
        currAdj = d3ab;
        currAdj2 = d3abr;
    }
    else if (ran1 <= 0.4) {
        currAdj = d4ab;
        currAdj2 = d4abr;
    }
    else if (ran1 <= 0.5) {
        currAdj = d5ab;
        currAdj2 = d5abr;
    }
    else if (ran1 <= 0.6) {
        currAdj = d1rb;
        currAdj2 = d1rbr;
    }
    else if (ran1 <= 0.7) {
        currAdj = d2rb;
        currAdj2 = d2rbr;
    }
    else if (ran1 <= 0.8) {
        currAdj = d3rb;
        currAdj2 = d3rbr;
    }
    else if (ran1 <= 0.9) {
        currAdj = d4rb;
        currAdj2 = d4rbr;
    }
    else {
        currAdj = d5rb;
        currAdj2 = d5rbr;
    }
    currWid = parseFloat(currAdj.textContent);
    ran2 = Math.random();
    if (ran2 < 0.5) {
        currWid++;
    }
    else {
        currWid--;
    }
    currAdj.style.width = currWid + "%";
    currAdj2.style.width = (101-currWid) + "%";
    currAdj.innerText = currWid + "%";
}

function adjustRates() {
    var avgAPercent = (parseFloat(d1ab.textContent) + parseFloat(d2ab.textContent) + parseFloat(d3ab.textContent) + parseFloat(d4ab.textContent) + parseFloat(d5ab.textContent));
    avgAPercent /= 5;
    nab.style.width = avgAPercent + "%";
    nabr.style.width = (101 - avgAPercent) + "%";
    var roundedBar = avgAPercent;
    roundedBar *= 100;
    roundedBar = Math.round(roundedBar);
    roundedBar /= 100;
    nab.innerText =  roundedBar + "%";
}

function hasDecimal(number) {
    return number % 1 !== 0;
  }

var incomeTaxRate = 0.2;
var socialServiceCost = 3000000;
var militaryCost = 2531428;
var educationCost = 765714;
var healthcareCost = 5428571;

function adjustTaxRate(newRate) {
    incomeTaxRate = newRate;
}

function adjustMilitaryCost(newCost) {
    militaryCost = newCost;
}

function adjustSocialServiceCost(newCost) {
    socialServiceCost = newCost;
}

function adjustEducationCost(newCost) {
    educationCost = newCost;
}

function changeHealthcareCost(newCost) {
    healthcareCost = newCost;
}

var taxesCollected = 0;
var gdpPerCapita = 6916.0;
var population = 1000;
var debt = 0;
const debtBarLeft = document.getElementById("debt-left");
const debtBarRight = document.getElementById("debt-right");

function debtPerMonth() {
    taxesCollected = incomeTaxRate*gdpPerCapita*population;
    debt += (socialServiceCost/12);
    debt += (militaryCost/12);
    debt += (educationCost/12);
    debt += (healthcareCost/12);
    debt *= 1.05;
    debt -= (taxesCollected/12);
    debt *= 100;
    debt = Math.round(debt);
    debt /= 100;
    debtBarLeft.innerText = "$" + debt;
    adjustDebtBar(debt);
}  

function adjustDebtBar(curDebt) {
    const debtBarCalcConst = 54600000;
    debtBarLeft.style.width = ((debt*100)/debtBarCalcConst) + "%";
    debtBarRight.style.width = 101-((debt*100)/debtBarCalcConst) + "%";
}

var month1 = 0;
var month2 = 0;
var year = 2000;
const dateDisplay = document.getElementById("date");

function passMonth() {
    debtPerMonth();
    if (month2 == 2 && month1 == 1) {
        month2 = 1;
        month1 = 0;
        year ++;
    }
    else if (month2 <= 8) {
        month2++;
    }
    else if (month2 == 9 && month1 == 0) {
        month2 = 0;
        month1 ++;
    }
    dateDisplay.innerText = "Date: " + month1 + month2 + "/01/" + year;
}

window.onload = passMonth();

const debtManager = document.getElementById("debtManager");

function closeDebtManager() {
    debtManager.style.display = "none";
    debtPopup.style.display = "none";
}

function openDebtManager() {
    closeBook();
    debtManager.style.display = "flex";
}

const debtDropdown = document.getElementById("debtDropdown");
const currentDebtStatus = document.getElementById("currentStatus");
const totalDebtStatus = document.getElementById("totalStatus");
const disclaimer = document.getElementById("debtAdjustDisclaimer");

function showDebtInfo() {
    totalDebtStatus.style.display = "block";
    currentDebtStatus.style.display = "block";
    disclaimer.style.display = "block";
    var taxColM = (gdpPerCapita*population*incomeTaxRate/12);
    taxColM *= 100;
    taxColM = Math.round(taxColM);
    taxColM /= 100;
    var currPL = calcMonthlyDebt();
    totalDebtStatus.innerText = "Current Government Profit/Loss per Month: $" + currPL;
    if (debtDropdown.value == 0) {
        currentDebtStatus.innerText = "Current Income From Taxes Monthly: $" + taxColM
        disclaimer.innerText = "Click the up arrow to raise taxes, click the down arrow to lower taxes.";
    }
    else if (debtDropdown.value == 1) {
        currentDebtStatus.innerText = "Current Monthly Spending on Social Services: $" + Math.round(socialServiceCost/12);
        disclaimer.innerText = "Click the up arrow to raise spending on social services, click the down arrow to lower it.";
    }
    else if (debtDropdown.value == 2) {
        currentDebtStatus.innerText = "Current Monthly defense (military) spending: $" + Math.round(militaryCost/12);
        disclaimer.innerText = "Click the up arrow to raise defense (military) spending, click the down arrow to lower it."; 
    }
    else if (debtDropdown.value == 3) {
        currentDebtStatus.innerText = "Current Monthly education spending: $" + Math.round(educationCost/12);
        disclaimer.innerText = "Click the up arrow to raise education spending, click the down arrow to lower it."; 
    }
    else if (debtDropdown.value == 4) {
        currentDebtStatus.innerText = "Current Monthly Healthcare spending: $" + Math.round(healthcareCost/12);
        disclaimer.innerText = "Click the up arrow to raise healthcare spending, click the down arrow to lower it.";
    }
}

function calcMonthlyDebt() {
    var profitLoss = 0;
    taxesCollected = incomeTaxRate*gdpPerCapita*population;
    profitLoss -= (socialServiceCost/12);
    profitLoss -= (militaryCost/12);
    profitLoss -= (educationCost/12);
    profitLoss -= (healthcareCost/12);
    profitLoss *= 1.05;
    profitLoss += (taxesCollected/12);
    profitLoss *= 100;
    profitLoss = Math.round(profitLoss);
    profitLoss /= 100;
    return profitLoss;
}

var dpUpDown = 0;
const dpDesc = document.getElementById("dpDesc");

function upDownClicked(buttonClicked) {
    if (debtDropdown.value != "") {
    dpUpDown = buttonClicked;
    debtPopup.style.display = "grid";
    if (buttonClicked == 0) {
        dpDesc.innerText = "Raise By How Much?";
    }
    else {
        dpDesc.innerText = "Reduce By How Much?";
    }
}
}

const debtPopup = document.getElementById("debtPopup");
const dpInput = document.getElementById("dpInput");

function dpPercent(buttonNum) {
    if (buttonNum != 11) {
        var multiplier = buttonNum/10;
        if (debtDropdown.value == 0 && dpUpDown == 0) {
            incomeTaxRate += multiplier*incomeTaxRate;
            showDebtInfo();
        }
        else if (debtDropdown.value == 1 && dpUpDown == 0) {
            socialServiceCost += multiplier*socialServiceCost;
            showDebtInfo();
        }
        else if (debtDropdown.value == 2 && dpUpDown == 0) {
            militaryCost += multiplier*militaryCost;
            showDebtInfo();
        }
        else if (debtDropdown.value == 3 && dpUpDown == 0) {
            educationCost += multiplier*educationCost;
            showDebtInfo();
        }
        else if (debtDropdown.value == 4 && dpUpDown == 0) {
            healthcareCost += multiplier*healthcareCost;
            showDebtInfo();
        }
        else if (debtDropdown.value == 0 && dpUpDown == 1) {
            incomeTaxRate -= multiplier*incomeTaxRate;
            showDebtInfo();
        }
        else if (debtDropdown.value == 1 && dpUpDown == 1) {
            socialServiceCost -= multiplier*socialServiceCost;
            showDebtInfo();
        }
        else if (debtDropdown.value == 2 && dpUpDown == 1) {
            militaryCost -= multiplier*militaryCost;
            showDebtInfo();
        }
        else if (debtDropdown.value == 3 && dpUpDown == 1) {
            educationCost -= multiplier*educationCost;
            showDebtInfo();
        }
        else if (debtDropdown.value == 4 && dpUpDown == 1) {
            healthcareCost -= multiplier*healthcareCost;
            showDebtInfo();
        }
    }
    else {
        var input = parseFloat(dpInput.value);
        if (debtDropdown.value == 0 && dpUpDown == 0) {
            var tempTax = (incomeTaxRate*gdpPerCapita*population)/12;
            var tempTax2 = tempTax+input;
            var newRate = tempTax2/gdpPerCapita/population*12;
            incomeTaxRate = newRate;
            showDebtInfo();
        }
        else if (debtDropdown.value == 1 && dpUpDown == 0) {
            socialServiceCost += input*12;
            showDebtInfo();
        }
        else if (debtDropdown.value == 2 && dpUpDown == 0) {
            militaryCost += input*12;
            showDebtInfo();
        }
        else if (debtDropdown.value == 3 && dpUpDown == 0) {
            educationCost += input*12;
            showDebtInfo();
        }
        else if (debtDropdown.value == 4 && dpUpDown == 0) {
            healthcareCost += input*12;
            showDebtInfo();
        }
        else if (debtDropdown.value == 0 && dpUpDown == 1) {
            var tempTax = (incomeTaxRate*gdpPerCapita*population)/12;
            var tempTax2 = tempTax-input;
            var newRate = tempTax2/gdpPerCapita/population*12;
            incomeTaxRate = newRate;
            showDebtInfo();
        }
        else if (debtDropdown.value == 1 && dpUpDown == 1) {
            socialServiceCost -= input*12;
            showDebtInfo();
        }
        else if (debtDropdown.value == 2 && dpUpDown == 1) {
            militaryCost -= input*12;
            showDebtInfo();
        }
        else if (debtDropdown.value == 3 && dpUpDown == 1) {
            educationCost -= input*12;
            showDebtInfo();
        }
        else if (debtDropdown.value == 4 && dpUpDown == 1) {
            healthcareCost -= input*12;
            showDebtInfo();
        }
    }
    debtPopup.style.display = "none";
}