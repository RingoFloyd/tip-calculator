const customInput = parseInt(document.getElementById("custom-percentage").value, 10);

parseInt(document.getElementById("custom-percentage").value, 10).addEventListener("keypress", function(e) {
    if (e.key === "Enter") {
    let billAmount = parseInt(document.getElementById("bill").value, 10);
    let peopleNumber = parseInt(document.getElementById("num-of-people").value, 10);
    let tipAmountCustom = (billAmount / customInput) * 100;
    let totalBill = billAmount + tipAmountCustom;

    document.getElementById("tip-per-person").innerHTML = "$" + (tipAmountCustom / peopleNumber).toFixed(2);
    document.getElementById("total-per-person").innerHTML = "$" + (totalBill / peopleNumber).toFixed(2);

    }
});




function fivePercent() {
    let billAmount = parseInt(document.getElementById("bill").value, 10); //parseInt is necessary to change this to an integer. Without it it interprets it as a string.
    let peopleNumber = parseInt(document.getElementById("num-of-people").value, 10);
    let tipAmountFive = billAmount / 20;
    let totalBill = tipAmountFive + billAmount;
    
    document.getElementById("tip-per-person").innerHTML = "$" + (tipAmountFive / peopleNumber).toFixed(2);
    document.getElementById("total-per-person").innerHTML = "$" + (totalBill / peopleNumber).toFixed(2);
}

function tenPercent() {
    let billAmount = parseInt(document.getElementById("bill").value, 10);
    let peopleNumber = parseInt(document.getElementById("num-of-people").value, 10);
    let tipAmountTen = billAmount / 10;
    let totalBill = tipAmountTen + billAmount;

    document.getElementById("tip-per-person").innerHTML = "$" + (tipAmountTen / peopleNumber).toFixed(2);
    document.getElementById("total-per-person").innerHTML = "$" + (totalBill / peopleNumber).toFixed(2);
}

function fifteenPercent() {
    let billAmount = parseInt(document.getElementById("bill").value, 10);
    let peopleNumber = parseInt(document.getElementById("num-of-people").value, 10);
    let tipAmountFifteen = (billAmount * 3) / 20;
    let totalBill = tipAmountFifteen + billAmount;

    document.getElementById("tip-per-person").innerHTML = "$" + (tipAmountFifteen / peopleNumber).toFixed(2);
    document.getElementById("total-per-person").innerHTML = "$" + (totalBill / peopleNumber).toFixed(2);
}

function twentyFivePercent() {
    let billAmount = parseInt(document.getElementById("bill").value, 10);
    let peopleNumber = parseInt(document.getElementById("num-of-people").value, 10);
    let tipAmountTwentyFive = billAmount / 4;
    let totalBill = tipAmountTwentyFive + billAmount;

    document.getElementById("tip-per-person").innerHTML = "$" + (tipAmountTwentyFive / peopleNumber).toFixed(2);
    document.getElementById("total-per-person").innerHTML = "$" + (totalBill / peopleNumber).toFixed(2);
}

function fiftyPercent() {
    let billAmount = parseInt(document.getElementById("bill").value, 10);
    let peopleNumber = parseInt(document.getElementById("num-of-people").value, 10);
    let tipAmountFifty = billAmount / 2;
    let totalBill = tipAmountFifty + billAmount;

    document.getElementById("tip-per-person").innerHTML = "$" + (tipAmountFifty / peopleNumber).toFixed(2);
    document.getElementById("total-per-person").innerHTML = "$" + (totalBill / peopleNumber).toFixed(2);
}

function reset() {

    document.getElementById("tip-per-person").innerHTML = "$0.00";
    document.getElementById("total-per-person").innerHTML = "$0.00";
    document.getElementById("bill").value = "";
    document.getElementById("num-of-people").value = "";

}

