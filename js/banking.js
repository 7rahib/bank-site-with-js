//get input 
function getInputValue(inputId) {
    const inputField = document.getElementById(inputId);
    const amountValue = parseFloat(inputField.value);
    inputField.value = '';
    return amountValue;
}

//update amount
function updateTotalField(totalFieldId, amount) {
    const totalElement = document.getElementById(totalFieldId);
    const previousTotal = parseFloat(totalElement.innerText);
    totalElement.innerText = previousTotal + amount;
}

//get current balance
function getCurrentBalance() {
    const balanceTotal = document.getElementById('balance-total');
    const previousBalanceTotal = parseFloat(balanceTotal.innerText);
    return previousBalanceTotal;
}

//update balance
function updateBalance(amount, isAdd) {
    const balanceTotal = document.getElementById('balance-total');
    const previousBalanceTotal = getCurrentBalance();
    if (isAdd == true) {
        balanceTotal.innerText = previousBalanceTotal + amount;
    } else {
        balanceTotal.innerText = previousBalanceTotal - amount;
    }
}


// Handle Deposit
document.getElementById('deposit-button').addEventListener('click', function() {

    const depositAmount = getInputValue('deposit-input');

    if (depositAmount > 0) {
        updateTotalField('deposit-total', depositAmount);
        updateBalance(depositAmount, true);
    } else {
        alert('Please give amount in number or in positive only.')
    }


});


// Handle Withdraw
document.getElementById('withdraw-button').addEventListener('click', function() {

    const withdrawAmount = getInputValue('withdraw-input');
    const currentBalance = getCurrentBalance();
    if (withdrawAmount > 0 && withdrawAmount <= currentBalance) {
        updateTotalField('withdraw-total', withdrawAmount);
        updateBalance(withdrawAmount, false);
    } else {
        alert('Please give amount in number or in positive only.')
    }
    if (withdrawAmount > currentBalance) {
        alert("Sorry, you don't have enough in your account");
    }

});


// Logout
document.getElementById('logout-button').addEventListener('click', function() {
    window.location.href = "index.html";
})