
function fivePercent() {
    let billAmount = document.getElementById("bill").value;
    let peopleNumber = document.getElementById("num-of-people").value;
    let tipAmountFive = (billAmount * 5) / 100;
   // let totalBill = tipAmountFive + billAmount;
    
    document.getElementById("tip-per-person").innerHTML = "$" + ((billAmount * 5) / 100) / peopleNumber;
    document.getElementById("total-per-person").innerHTML = "$" + totalBill;
}

