// Light-Coin Assignment:


/*
  The project has already started and some code was already written.

  Features:

  Here's a list of features that our code needs to support:

    - Allow multiple accounts to be created
    - Each account can have many transactions
    - Allow withdrawals and deposits into accounts
    - Allow us to retrieve the transaction history of an account
      (all withdrawals and deposits)
    - Allow us to retrieve the current balance of the account at any time
    - Don't allow withdrawals that exceed the remaining balance of the account
*/

// super class Account
class Account {

  constructor() {
    this.transactions = [];
  }

  get balance() {
    // Calculate the balance using the transaction
    let balance = 0;
    for (let transaction of this.transactions) {
      balance += transaction.value;
    }
    return balance;
  }

  // add transactions to the transaction record
  addTransaction(transaction) {
    this.transactions.push(transaction);
  }
}

// sub-class transaction
class Transaction {

  constructor(amount, account) {
    this.amount = amount;
    this.account = account;
  }

  commit() {
    // Check that the transaction is allowed
    if (!this.isAllowed()) return false;
    // Keep track of the date of the transaction
    this.time = new Date();
    // Add the transaction to the account
    this.account.addTransaction(this);
    return true;
  }
}

// sub-class deposit
class Deposit extends Transaction {

  get value() {
    return this.amount;
  }
  isAllowed() {
    // deposits are always allowed so they only return true.
    return true;
  }
}

// sub-class withdrawal
class Withdrawal extends Transaction {

  // gets the current value
  get value() {
    // returns the value minus the withdrawal amount
    return -this.amount;
  }
  // checks if the withdrawal is allowed, true if there are enough funds in the account
  isAllowed() {
    return (this.account.balance - this.amount >= 0);
  }
}


// DRIVER CODE BELOW

const myAccount = new Account("raccoon sanctuary");

// Logs the starting balance of the "raccoon sanctuary" account.
console.log('Starting Balance:', myAccount.balance);


// Attempting to withdraw even 1.00 should fail if the starting balance is 0.00
console.log('Attempting to withdraw even $1 should fail');
const t1 = new Withdrawal(1.00, myAccount);
console.log('Commit result:', t1.commit());
console.log('Account Balance: ', myAccount.balance);


// transaction 1: deposit 120.00, should pass.
console.log('Depositing 120.00 should succeed');
const t2 = new Deposit(120.00, myAccount);
t2.commit();

// transaction 2: withdrawal 119.99 should pass.
console.log('Withdrawal for 119.00 should pass');
const t3 = new Withdrawal(119.00, myAccount);
t3.commit();


// transaction 3: withdrawal 70.00, should fail
console.log('Withdrawal for 70.00 should fail');
const t4 = new Withdrawal(70.00, myAccount);
t4.commit();

// Logs the ending balance of the "raccoon sanctuary" account.
console.log('Ending Balance: ', myAccount.balance);

console.log('Time to do more fundraising for our mischievious little friends!');

// Logs the account history:
console.log('Account Transaction History: ', myAccount.transactions);
