var person1 = {
    accountID: "009060032",
    userName: "person1",
    password: "iampersonwan",
    currentBalance: 6569,

}

var person2 = {
    accountID: "009060168",
    userName: "person2",
    password: "iamnotone",
    currentBalance: 7732,

}

var person3 = {
    accountID: "009060654",
    userName: "person3",
    password: "threetrees",
    currentBalance: 3356,

}
var person4 = {
    accountID: "009060985",
    userName: "person4",
    password: "iamnumberfour",
    currentBalance: 11646,

};



// This is the login prompt


function loginVerify() {


    var loginUser = prompt("Enter your username: ");

    var loginPassword = prompt("Enter your password: ");


    if (loginUser == person1.userName && loginPassword == person1.password) {

        console.log("logged in successfully");
        loginKey = 1;

    } else if (loginUser == person2.userName && loginPassword == person2.password) {

        console.log("logged in successfully");
        loginKey = 2;

    } else if (loginUser == person3.userName && loginPassword == person3.password) {

        console.log("logged in successfully");
        loginKey = 3;
    } else if (loginUser == person4.userName && loginPassword == person4.password) {

        console.log("logged in successfully");
        loginKey = 4;
    } else {
        alert("Warning! incorrect username or password.");

    }

};



// this is the deposit function

function deposit(depositOption) {


    switch (depositOption) {

        // own account deposit
        case "a":

            loginVerify();

            var depositAmount = parseInt(prompt("Enter the amount of money you want to deposit: "));

            switch (loginKey) {

                case 1:
                    person1.currentBalance += depositAmount;
                    console.log("Deposit successful! You have deposited " + depositAmount + " to your account. Your Current account balance is " + person1.currentBalance);

                    break;
                case 2:
                    person2.currentBalance += depositAmount;
                    console.log("Deposit successful! You have deposited " + depositAmount + " to your account. Your Current account balance is " + person2.currentBalance);

                    break;
                case 3:
                    person3.currentBalance += depositAmount;
                    console.log("Deposit successful! You have deposited " + depositAmount + " to your account. Your Current account balance is " + person3.currentBalance);

                    break;
                case 4:
                    person4.currentBalance += depositAmount;
                    console.log("Deposit successful! You have deposited " + depositAmount + " to your account. Your Current account balance is " + person4.currentBalance);

                    break;

                default:
                    alert("this shouldn't return")
            }
            break;

            //   others' account 
        case "b":
            var depositReceiver = prompt("Enter the account holder to whom you're sending money to: ")
            var depositAmount = parseInt(prompt("Enter the amount of money you want to deposit: "));

            switch (depositReceiver) {

                case "person1":

                    person1.currentBalance += depositAmount;

                    console.log("Deposit successful. You have sent " + depositAmount + " USD$ to " + depositReceiver);

                    break;
                case "person2":

                    person2.currentBalance += depositAmount;

                    console.log("Deposit successful. You have sent " + depositAmount + " USD$ to " + depositReceiver);
                    break;
                case "person3":

                    person3.currentBalance += depositAmount;

                    console.log("Deposit successful. You have sent " + depositAmount + " USD$ to " + depositReceiver);

                    break;

                case "person4":

                    person4.currentBalance += depositAmount;

                    console.log("Deposit successful. You have sent " + depositAmount + " USD$ to " + depositReceiver);
                    break;

                default:
                    alert("Account doesn't exist!");
            }

            break;
    }
};


// this is the current balanace function
function currentBalance(loginKey) {
    switch (loginKey) {
        case 1:
            console.log("Dear customer your current account balance is: " + person1.currentBalance);
            break;
        case 2:
            console.log("Dear customer your current account balance is: " + person2.currentBalance);
            break;
        case 3:
            console.log("Dear customer your current account balance is: " + person3.currentBalance);
            break;
        case 4:
            console.log("Dear customer your current account balance is: " + person4.currentBalance);
            break;

    }

};



function transfer(loginKey, transactionReceiver, transferAmount) {


    switch (loginKey) {

        case 1:


            if (transferAmount <= parseInt(person1.currentBalance)) {

                person1.currentBalance -= transferAmount;
                console.log("Your current balance is: " + person1.currentBalance);


            } else {
                alert("Warning! your current balance is insufficient for the transfer.")
            }
            break;
        case 2:

            if (transferAmount <= parseInt(person2.currentBalance)) {

                person2.currentBalance -= transferAmount;
                console.log("Your current balance is: " + person2.currentBalance);


            } else {
                alert("Warning! your current balance is insufficient for the transfer.")
            }
            break;
        case 3:
            if (transferAmount <= parseInt(person3.currentBalance)) {

                person3.currentBalance -= transferAmount;
                console.log("Your current balance is: " + person3.currentBalance);


            } else {
                alert("Warning! your current balance is insufficient for the transfer.")
            }
            break;
        case 4:
            if (transferAmount <= parseInt(person4.currentBalance)) {

                person4.currentBalance -= transferAmount;
                console.log("Your current balance is: " + person4.currentBalance);


            } else {
                alert("Warning! your current balance is insufficient for the transfer.")
            }
            break;

    }


    switch (transactionReceiver) {
        case "person1":
            person1.currentBalance += transferAmount;
            alert("The transfer has completed successfully.");
            break;
        case "person2":
            person2.currentBalance += transferAmount;
            alert("The transfer has completed successfully.");
            break;
        case "person3":
            person3.currentBalance += transferAmount;
            alert("The transfer has completed successfully.");
            break;
        case "person4":
            person4.currentBalance += transferAmount;
            alert("The transfer has completed successfully.");
            break;

    }



};


function withdraw(withdrawAmount) {


    switch (loginKey) {

        case 1:
            if (withdrawAmount <= person1.currentBalance) {

                person1.currentBalance -= withdrawAmount;
                alert("You have successfully withdrew " + withdrawAmount + " of money from your account. Remaining balance is " + person1.currentBalance);
            } else if (withdrawAmount >= "10000") {
                console.log("You cannot withdraw above 10,000 USD at once.")

            } else {
                alert("Warning! insufficient balance.");
            }

            break;
        case 2:
            if (withdrawAmount <= person2.currentBalance) {

                person2.currentBalance -= withdrawAmount;
                alert("You have successfully withdrew " + withdrawAmount + " of money from your account. Remaining balance is " + person2.currentBalance);
            } else if (withdrawAmount >= "10000") {
                console.log("You cannot withdraw above 10,000 USD at once.")

            } else {
                alert("Warning! insufficient balance.");
            }
            break;
        case 3:

            if (withdrawAmount <= person2.currentBalance) {

                person3.currentBalance -= withdrawAmount;
                alert("You have successfully withdrew " + withdrawAmount + " of money from your account. Remaining balance is " + person3.currentBalance);
            } else if (withdrawAmount >= "10000") {
                console.log("You cannot withdraw above 10,000 USD at once.")

            } else {
                alert("Warning! insufficient balance.");
            }
            break;
        case 4:

            if (withdrawAmount <= person2.currentBalance) {
                person3.currentBalance -= withdrawAmount;
                alert("You have successfully withdrew " + withdrawAmount + " of money from your account. Remaining balance is " + person4.currentBalance);

            } else if (withdrawAmount >= "10000") {
                console.log("You cannot withdraw above 10,000 USD at once.")

            } else {
                alert("Warning! insufficient balance.");
            }

            break;

        default:
            alert("The account of your choice doesn't exist");

    }
};


// the IIFE


(function () {

    var option = prompt("Which function do you want to perform: (d) Deposit, (w) Withdraw, (b) Balance, (t) Transfer ? ");

    if (option == "d") {

        var depositOption = prompt("Do you want to deposit to (a) your own account or (b) another?  ");

        deposit(depositOption);


    } else if (option == "w" | option == "b" | option == "t") {

        loginVerify();

        switch (option) {
            case "w":
                var withdrawAmount = parseInt(prompt("Enter the amount You want to withdraw: "));
                withdraw(withdrawAmount);
                break;

            case "b":
                currentBalance(loginKey);
                break;

            case "t":


                transferAmount = parseInt(prompt("Enter the amount of money you want to transfer: "));
                transactionReceiver = prompt("Enter the receiver's account holder name: ");
                transfer(loginKey, transactionReceiver, transferAmount);
                break;

            default:
                alert("Choose a valid operation! ");


        }

    }

})();