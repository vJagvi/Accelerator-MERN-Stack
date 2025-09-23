"use strict";

let balance = 1000; // starting balance

// TODO-1: Implement getMenuChoice()
// Show a prompt with options: 1) Check Balance 2) Withdraw 3) Deposit 4) Exit
// Return the user's numeric choice (1..4). Validate and re-prompt if invalid.
function getMenuChoice() {
  // TODO
  let choice= parseInt(prompt("Select a numeric choice among these options: 1) Check Balance 2) Withdraw 3) Deposit 4) Exit "))

  switch (choice) {
    case 1: 
      return checkBalance();
      break;
    case 2:
      return withdraw();
      break;
    case 3:
      return deposit();
      break;
    case 4:
      return;
    default:
      prompt("Enter valid option: ");
  }

}

function checkBalance() {
  alert(`Current balance: ₹${balance.toFixed(2)}`);
}

function deposit() {
  const input = prompt("Enter amount to deposit:");
  if (input === null) return;
  const amount = parseFloat(input);
  if (Number.isNaN(amount) || amount <= 0) {
    alert("Invalid amount. Please enter a positive number.");
    return;
  }
  balance += amount;
  alert(`Deposited ₹${amount.toFixed(2)}. New balance: ₹${balance.toFixed(2)}`);
}

// TODO-2: Implement withdraw()
// Prompt for amount; reject NaN/≤0; reject if amount > balance; deduct & alert.
function withdraw() {
  // TODO
  const input = prompt("Enter amount to withdraw:");
  const amt=parseFloat(input);
  if (Number.isNaN(amt) || amt <= 0 || amt>balance) {
    alert("Rejected");
    return;
  }
  balance -= amt;
  alert(`Withdrew ₹${amt.toFixed(2)}. New balance: ₹${balance.toFixed(2)}`);
}

function runATM() {
  while (true) {
    const choice = getMenuChoice();
    console.log("User chose:", choice);
    switch (choice) {
      case 1:
        checkBalance();
        break;
      case 2:
        withdraw();
        break;
      case 3:
        deposit();
        break;
      case 4:
        alert("Thank you for using the ATM. Goodbye!");
        return; // exit loop
    }
  }
}

document.getElementById("start").addEventListener("click", runATM);
