// Login button event handler
const loginBtn = document.getElementById('login');
loginBtn.addEventListener('click', function () {
    const loginArea = document.getElementById('login-area');
    loginArea.style.display = "none";
    const transactionArea = document.getElementById('transaction-area');
    transactionArea.style.display = "block";
});


// Deposit button event handler
const depositBtn = document.getElementById('deposit-btn');
depositBtn.addEventListener('click', function () {
    const depositInput = document.getElementById('deposit-amount').value;
    if (depositInput > 0) {
        const depositNumber = getInputNumber('deposit-amount');
        console.log(depositNumber);
        updateData("current-deposit", depositNumber);
        updateData("currentBalance", depositNumber);
        depositAmount = document.getElementById('deposit-amount').value = "";
    }
});


// Withdraw button event handler
const withdrawBtn = document.getElementById('withdraw-btn');
withdrawBtn.addEventListener('click', function () {
    const withdrawInput = document.getElementById('withdrawAmount').value;
    if (withdrawInput > 0) {
        const withdrawNumber = getInputNumber("withdrawAmount");
        updateData("current-withdraw", withdrawNumber);
        updateData("currentBalance", -1 * withdrawNumber);
        depositAmount = document.getElementById('withdrawAmount').value = "";
    }
})


function getInputNumber(id) {
    const amount = document.getElementById(id).value;
    const number = parseFloat(amount);
    return number;
}


function updateData(id, numberVar) {
    const current = document.getElementById(id).innerText;
    const currentNumber = parseFloat(current);
    const total = numberVar + currentNumber;
    document.getElementById(id).innerText = total;
}



// Thank you :)