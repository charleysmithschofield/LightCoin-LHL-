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

// class Account {

//   constructor(username) {
//     this.username = username;
//     this.balance = 0;
//   }

// }


// class Transaction {

//   constructor(amount, account) {
//     this.amount = amount;
//     this.account = account;
//   }

//   commit() {
//     this.account.balance += this.value;
//   }

// }


// class Deposit extends Transaction {

//   get value() {
//     return this.amount;
//   }

// }


// class Withdrawal extends Transaction {

//   get value() {
//     return -this.amount
//   }

// }

// /*
//   We are moving as much logic as makes sense into the Transaction class. We want Deposit and Withdrawal
//   to only contain the code that it absolutely has to. The remaining code in the subclasses is logic that
//   could not be shared with others.

//   The way we create a Withdrawal or Deposit has not changed; the interface has stayed the same. What has
//   has changed is how we're implementing these classes. Our driver code, which uses the classes, has zero
//   need to change. This is an example of good refactoring.
// */

// // DRIVER CODE BELOW
// // We use the code below to "drive" the application logic above and make sure it's working as expected

// const myAccount = new Account("snow-patrol");

// // Logs the starting balance of the "snow-patrol" account.
// console.log('Starting Balance:', myAccount.balance);

// // transaction 1: deposits 120.00 to the "snow-patrol" account.
// const t1 = new Deposit(120.00, myAccount);
// t1.commit();

// // transaction 2: withdrawals 50.25 from the "snow-patrol" account.
// const t2 = new Withdrawal(50.25, myAccount);
// t2.commit();

// // Logs the ending balance of the "snow-patrol" account.
// console.log(('Ending Balance:', myAccount.balance));

/*
  ## WITHDRAWAL CLASS:

  Every account holder of this app will have a balance that they can withdraw from or deposit it.

  For now, the user starts with a balance of 500.00 and there is a Withdrawal object that allows
  a user to withdraw money from that balance.

  to withdraw money, the application logic requires that a new instance of the Withdrawal object
  be created with the desired amount. The commit method should then be called in order to finalize
  and apply that transaction to the account's balance.


  - What do we get when we run the code above using npm run:
    Transaction 1: Withdrawal { amount: 50.25 }
    Transaction 2: Withdrawal { amount: 9.99 }
    Balance: 439.76
*/

/*
  ## DEPOSIT CLASS:

  We have a way to withdraw money from the user's balance, but no way to deposit.

  - Create a Deposit class to represent deposits. Add in the following code below
    or above the Withdrawal class.

    class Deposit {
      constructor(amount) {
        this.amount = amount;
      }

      commit() {
        balance += this.amount;
      }
    }

  Instantiate a deposit to test it out:

  t3 = new Deposit(120.00);
  t3.commit();

  console.log('Transaction 3:', t3);
*/


/*
  ## Account Class:

  So far we ahve an object for Withdrawal and an object for Deposit,
  but the user's balance is just a number variable accessible to all
  functions.

  This is bad b/c:
    - Associating data with the balance, lik an account number or name,
      will be difficult.

    - There is just one balance amount, so the app doesn't suppose multi-
      ple accounts.

    - The variable's scope makes it accessible by any class or function
      in this file. Not only is this needless exposure, it could lead to
      a function accidentally modifying this variable.

  To fix this issues, we are going to create an Account class that will
  keep track of the user and their balance.

    class Account {
      constructor(username) {
        this.username = username;

        // Have the account balance start at $0 sicne that makes more sense.
        this.balance = 0;
      }
    }
*/

/*
    ## Adding a New User:

  This will allow us to create a new account for every user.
  - Add the following account creation to the top of your driver code.

    const myAccount = new Account("snow-patrol");

  - Update the Withdrawal and Deposit classes to use this new account object
    instead of the balance variable.


        class Deposit {

      // Pass in the account that the deposit this for
      constructor(amount, account) {
        this.amount = amount;
        this.account = account;
      }

      // Update the balance in the account
      commit() {
        this.account.balance += this.amount;
      }

    }

    class Withdrawal {

      // Pass in the account that the withdrawal this for
      constructor(amount, account) {
        this.amount = amount;
        this.account = account;
      }

      // Update the balance in the account
      commit() {
        this.account.balance -= this.amount;
      }

    }
*/

// class Account {

//   constructor(username) {
//     this.username = username;
//     this.balance = 0;
//   }

// }


// class Transaction {

//   constructor(amount, account) {
//     this.amount = amount;
//     this.account = account;
//   }

//   commit() {
//     this.account.balance += this.value;
//   }

// }


// class Deposit extends Transaction {

//   get value() {
//     return this.amount;
//   }

// }


// class Withdrawal extends Transaction {

//   get value() {
//     return -this.amount
//   }

// }

// /*
//   We are moving as much logic as makes sense into the Transaction class. We want Deposit and Withdrawal
//   to only contain the code that it absolutely has to. The remaining code in the subclasses is logic that
//   could not be shared with others.

//   The way we create a Withdrawal or Deposit has not changed; the interface has stayed the same. What has
//   has changed is how we're implementing these classes. Our driver code, which uses the classes, has zero
//   need to change. This is an example of good refactoring.
// */

// // DRIVER CODE BELOW
// // We use the code below to "drive" the application logic above and make sure it's working as expected

// const myAccount = new Account("snow-patrol");

// // Logs the starting balance of the "snow-patrol" account.
// console.log('Starting Balance:', myAccount.balance);

// // transaction 1: deposits 120.00 to the "snow-patrol" account.
// const t1 = new Deposit(120.00, myAccount);
// t1.commit();

// // transaction 2: withdrawals 50.25 from the "snow-patrol" account.
// const t2 = new Withdrawal(50.25, myAccount);
// t2.commit();

// // Logs the ending balance of the "snow-patrol" account.
// console.log(('Ending Balance:', myAccount.balance));

/*
  ## PROBLEM:

  Finishing the Features:

  The app runs, but looking at our original features list, we're still missing some logic:

    Here's a list of features that our code needs to support:

    [x] Allow multiple accounts to be created
    [x] Each account can have many transactions
    [x] Allow withdrawals and deposits into accounts
    [ ] Allow us to retrieve the transaction history of an account
    [ ] (all withdrawals and deposits)
    [ ] Allow us to retrieve the current balance of the account at any time
    [ ] Don't allow withdrawals that exceed the remaining balance of the account
*/

/*
  ## Missing Feature 1 - Keep Track of Transactions:

  Right now we keep updating a balance property and we're not keeping track of each transaction.

  It would be much better if we kept track so we could have a history of every transaction for
  each account.

  Let's modify the Account class to be able to keep track of the transactions:
*/

// class Account {

//   constructor(username) {
//     this.username = username;
//     this.transactions = [];
//   }

//   get balance() {
//     // Calculate the balance using the transaction
//     let balance = 0;
//     for (const transaction of this.transactions) {
//       balance += transaction.amount;
//     }
//     return balance;
//   }

//   addTransaction(transaction) {
//     this.transactions.push(transaction);
//   }

// }


// class Transaction {

//   constructor(amount, account) {
//     this.amount = amount;
//     this.account = account;
//   }

//   commit() {
//     // Keep track of the time of the transaction
//     this.time = new Date();
//     // Add the transaction to the account
//     this.account.addTransaction(this);
//   }

// }


// class Deposit extends Transaction {

//   get value() {
//     return this.amount;
//   }

// }


// class Withdrawal extends Transaction {

//   get value() {
//     return -this.amount;
//   }

// }


// // DRIVER CODE BELOW
// // We use the code below to "drive" the application logic above and make sure it's working as expected

// const myAccount = new Account("snow-patrol");

// // Logs the starting balance of the "snow-patrol" account.
// console.log('Starting Balance:', myAccount.balance);

// // transaction 1: deposits 120.00 to the "snow-patrol" account.
// const t1 = new Deposit(120.00, myAccount);
// t1.commit();

// // transaction 2: withdrawals 50.25 from the "snow-patrol" account.
// const t2 = new Withdrawal(50.25, myAccount);
// t2.commit();

// // Logs the ending balance of the "snow-patrol" account.
// console.log('Ending Balance:', myAccount.balance);

/*
  ## Missing Feature 2 - Validate Withdrawals:

  There is currently nothing checking if the user has money in their account prior to allowing
  a withdrawal. If the user has $0 and they want to keep withdrawing, there is nothing stopping
  them.

  Add some logic to make sure the user can never withdraw more money than they have.

  * One way to do this is to add a check that the transaction is allowed in the Transaction's
  commit method.

   - The check should call a method like isAllowed() which returns a true/false and would need
     to be implemented in each of the two subclasses. commit should return true/false based on
     its success.

     If it's not successful, the transaction shouldn't be added into the account either.
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
