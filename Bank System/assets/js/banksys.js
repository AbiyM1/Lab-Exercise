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
    currentBalance: 7732

}

var person3 = {
    accountID: "009060654",
    userName: "person3",
    password: "threetrees",
    currentBalance: 3356

}
var person4 = {
    accountID: "009060985",
    userName: "person4",
    password: "iamnumberfour",
    currentBalance: 11646

};






// This is the login prompt


function loginVerify() {


    var loginUser = prompt("Enter your username: ");

    var loginPassword = prompt("Enter your password: ");


    if (loginUser == person1.userName && loginPassword == person1.password) {

        alert("logged in successfully");
        loginKey = 1;

    } else if (loginUser == person2.userName && loginPassword == person2.password) {

        alert("logged in successfully");
        loginKey = 2;

    } else if (loginUser == person3.userName && loginPassword == person3.password) {

        alert("logged in successfully");
        loginKey = 3;
    } else if (loginUser == person4.userName && loginPassword == person4.password) {

        alert("logged in successfully");
        loginKey = 4;
    } else {
        alert("Warning! incorrect username or password.");

    }

};



function deposit(depositOption) {


    switch (depositOption) {

        case "a":

            loginVerify();

            var depositAmount = parseInt(prompt("Enter the amount of money you want to deposit: "));

            switch (loginKey) {

                case 1:
                    person1.currentBalance += depositAmount;
                    alert("Deposit successful! You have deposited " + depositAmount + " to your account. Your Current account balance is " + person1.currentBalance);

                    break;
                case 2:
                    person2.currentBalance += depositAmount;
                    alert("Deposit successful! You have deposited " + depositAmount + " to your account. Your Current account balance is " + person2.currentBalance);

                    break;
                case 3:
                    person3.currentBalance += depositAmount;
                    alert("Deposit successful! You have deposited " + depositAmount + " to your account. Your Current account balance is " + person3.currentBalance);

                    break;
                case 4:
                    person4.currentBalance += depositAmount;
                    alert("Deposit successful! You have deposited " + depositAmount + " to your account. Your Current account balance is " + person4.currentBalance);

                    break;
                
                default:
                    alert("this shouldn't return")
            }
            break;

            // this works perfectly
        case "b":
            var depositReceiver = prompt("Enter the account holder to whom you're sending money to: ")
            var depositAmount = parseInt(prompt("Enter the amount of money you want to deposit: "));

            switch (depositReceiver) {

                case "person1":

                    person1.currentBalance += depositAmount;

                    alert("Deposit successful. You have sent " + depositAmount + " USD$ to " + depositReceiver);

                    break;
                case "person2":

                    person2.currentBalance += depositAmount;

                    alert("Deposit successful. You have sent " + depositAmount + " USD$ to " + depositReceiver);
                    break;
                case "person3":

                    person3.currentBalance += depositAmount;

                    alert("Deposit successful. You have sent " + depositAmount + " USD$ to " + depositReceiver);

                    break;

                case "person4":

                    person4.currentBalance += depositAmount;

                    alert("Deposit successful. You have sent " + depositAmount + " USD$ to " + depositReceiver);
                    break;

                default:
                    alert("Account doesn't exist!");
            }

            break;

    }




};




function withdraw(withdrawAmount) {

    switch (loginKey) {
        case 1:
            person1.currentBalance -= withdrawAmount;
            break;
        case 2:
            person2.currentBalance -= withdrawAmount;
            break;
        case 3:
            person3.currentBalance -= withdrawAmount;
            break;
        case 4:
            person3.currentBalance -= withdrawAmount;
            break;

    }
}

function currentBalance() {
    switch (loginKey) {
        case 1:
            return person1.currentBalance;
            break;
        case 2:
            return person2.currentBalance;
            break;
        case 3:
            return person3.currentBalance;
            break;
        case 4:
            return person4.currentBalance;
            break;

    }
    
}










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

                currentBalance();
                break;

            case "t":

                transferAmount = parseInt(prompt("Enter the amount of money you want to transfer: "));
                transactionReceiver = prompt("Enter the receiver's account holder name: ");


                switch (loginKey) {
                    case 1:
                        person1.currentBalance -= transferAmount;
                        break;
                    case 2:
                        person2.currentBalance -= transferAmount;
                        break;
                    case 3:
                        person3.currentBalance -= transferAmount;
                        break;
                    case 4:
                        person4.currentBalance -= transferAmount;
                        break;

                }


                switch (transactionReceiver) {
                    case "person1":
                        person1.currentBalance += transferAmount;
                        break;
                    case "person2":
                        person2.currentBalance += transferAmount;
                        break;
                    case "person3":
                        person3.currentBalance += transferAmount;
                        break;
                    case "person4":
                        person4.currentBalance += transferAmount;
                        break;

                }



        }



    }










})();