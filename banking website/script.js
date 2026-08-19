let userAccount= null;

const navLinks = document.querySelectorAll("nav a");

document.getElementById("createaccountform");
createaccountform.addEventListener("submit", function (e){
    e.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email-account").value;
    const deposit = Number(document.getElementById("current-deposit").value);

const message = document.getElementById("create-message");

if (name==="" || email === "" || deposit < 0 || isNaN(deposit)) {
        message.textContent = "Please fill in all the fields correctly";
        alert ("ttttt");
        return;
    }

    userAccount= {
        name: name,
        email : email,
        balance : deposit
    };
    message.textContent = "Account created for " + name + "!";

});

//deposit
document.getElementById("deposit-form").addEventListener("submit", function (e) {
    e.preventDefault();

    const message = document.getElementById("deposit-message");
    const amount = Number(document.getElementById("deposit-amount").value);

    if(!userAccount){
        message.textContent = "Create account first";
        return;
    }
    if(amount<=0 || isNaN(amount)){
        message.textContent = "Enter a valid amount";
        return;
    }
    userAccount.balance += amount;
    message.textContent = "Deposited " + amount + " New balance is " + userAccount.balance + ".";

});

//withdraw
document.getElementById("withdraw-form").addEventListener("submit", function (e){
    e.preventDefault();

    const message = document.getElementById("withdraw-message");
    const amount = Number(document.getElementById("withdraw-amount").value);

    if(!userAccount){
        message.textContent = "Create account first";
        return;
    }

    if(amount<=0 || isNaN(amount)){
        message.textContent = " Enter a valid amount";
        return;
    }
    if(amount > userAccount.balance){
        message.textContent = "Insufficient funds.";
        return;
    }

    userAccount.balance -= amount;
    message.textContent = "withdrew " + amount + " new balance is " + userAccount.balance + " .";

});

//balance
document.getElementById("balance-display").addEventListener("click", function (e){
    e.preventDefault();

    const message = document.getElementById("rep");

    if(!userAccount){
        message.textContent = "No account created yet.";
        return;
    }
    else{
        message.textContent = userAccount.name + "'s balance is: " + userAccount.balance;
    }
});