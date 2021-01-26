//Log in event handel..................

const loginBtn = document.getElementById('login');
loginBtn.addEventListener('click', function(){
    const logInArea = document.getElementById('login-area');
    logInArea.style.display='none';
    const transactionArea = document.getElementById('transaction')
    transactionArea.style.display = 'block';
})

//deposit button event handel...........

const depositbtn =document.getElementById('dep-btn');
depositbtn.addEventListener('click',function(){
    const depositNumber = amountNumber('dep-amount');

    updatedAmountValue("deposit-balance",depositNumber); //
    updatedAmountValue("main-balance",depositNumber);
    
    document.getElementById('dep-amount').value = "";

})

//withdraw Amount button even handel....

const withdrawbtn = document.getElementById('withdraw-btn');

withdrawbtn.addEventListener('click',function(){
   const withdrawalNumber = amountNumber('withdraw-amount');
   updatedAmountValue("withdraw-balance",withdrawalNumber);

   updatedAmountValue("main-balance",-1* withdrawalNumber);

   document.getElementById('withdraw-amount').value = "";
})

function amountNumber(id){
    const withdrawalAmount = document.getElementById(id).value;
   const withdrawalNumber = parseFloat(withdrawalAmount);
   return withdrawalNumber;
}

    function updatedAmountValue(id,depositNumber){
    const current = document.getElementById(id).innerText;
    const currentNumber = parseFloat(current);
    const totalAmount = depositNumber + currentNumber;
    document.getElementById(id).innerText = totalAmount;
}