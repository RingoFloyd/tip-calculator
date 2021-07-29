

function fivePercent() {
    let billAmount = parseInt(document.getElementById("bill").value, 10); //parseInt is necessary to change this to an integer. Without it it interprets it as a string.
    let peopleNumber = parseInt(document.getElementById("num-of-people").value, 10);
    let tipAmountFive = billAmount / 20;
    let totalBill = tipAmountFive + billAmount;
    
    document.getElementById("tip-per-person").innerHTML = "$" + tipAmountFive / peopleNumber;
    document.getElementById("total-per-person").innerHTML = "$" + totalBill;
}

function tenPercent() {
    let billAmount = parseInt(document.getElementById("bill").value, 10);
    let peopleNumber = parseInt(document.getElementById("num-of-people").value, 10);
    let tipAmountTen = billAmount / 10;
    let totalBill = tipAmountTen + billAmount;

    document.getElementById("tip-per-person").innerHTML = "$" + tipAmountTen / peopleNumber;
    document.getElementById("total-per-person").innerHTML = "$" + totalBill;
}

function fifteenPercent() {
    let billAmount = parseInt(document.getElementById("bill").value, 10);
    let peopleNumber = parseInt(document.getElementById("num-of-people").value, 10);
    let tipAmountFifteen = (billAmount * 3) / 20;
    let totalBill = tipAmountFifteen + billAmount;

    document.getElementById("tip-per-person").innerHTML = "$" + tipAmountFifteen / peopleNumber;
    document.getElementById("total-per-person").innerHTML = "$" + totalBill;
}

function twentyFivePercent() {
    let billAmount = parseInt(document.getElementById("bill").value, 10);
    let peopleNumber = parseInt(document.getElementById("num-of-people").value, 10);
    let tipAmountTwentyFive = billAmount / 4;
    let totalBill = tipAmountTwentyFive + billAmount;

    document.getElementById("tip-per-person").innerHTML = "$" + tipAmountTwentyFive / peopleNumber;
    document.getElementById("total-per-person").innerHTML = "$" + totalBill;
}

function fiftyPercent() {
    let billAmount = parseInt(document.getElementById("bill").value, 10);
    let peopleNumber = parseInt(document.getElementById("num-of-people").value, 10);
    let tipAmountFifty = billAmount / 2;
    let totalBill = tipAmountFifty + billAmount;

    document.getElementById("tip-per-person").innerHTML = "$" + tipAmountFifty / peopleNumber;
    document.getElementById("total-per-person").innerHTML = "$" + totalBill;
}

