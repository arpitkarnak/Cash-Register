var billAmount = document.querySelector("#bill-amount");
var cashGiven = document.querySelector("#cash-given");
var buttonCheck = document.querySelector("#button-Check");
var message = document.querySelector("#error-message");
var noOfNotes = document.querySelectorAll(".no-of-notes");

const availableNotes = [2000, 500, 100, 20, 10, 5, 1];



buttonCheck.addEventListener("click", function validateBillAndCashAmount(){
    hideMessage();
    
    if (billAmount.value > 0) {

        if (cashGiven.value >= billAmount.value) {
            var amountToBeReturned = cashGiven.value - billAmount.value;
            calculateChange(amountToBeReturned);


            } else {
                showMessage(
                "The cash that you provide should be equal to bill amount");
            }
    } else {
        showMessage("Invalid Bill Amount");
    }
}
)


function calculateChange(amountToBeReturned){

    for (let i=0; i < availableNotes.length; i++){
        const numberOfNotes = Math.trunc(amountToBeReturned / availableNotes[i]);

        amountToBeReturned = amountToBeReturned % availableNotes[i];

        noOfNotes[i].innerText = numberOfNotes;
        //updating notes 

    }
}

function hideMessage() {
    message.style.display = "none";
}



function showMessage(msg) {
    message.style.display = "block";
    message.innerText = msg;
}