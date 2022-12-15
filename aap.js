var billAmount = document.querySelector("#bill-amount");
var cashGiven = document.querySelector("#cash-given");
var checkButton = document.querySelector("#check-button");
var message = document.querySelector("#error-message");
var noOfNotes = document.querySelectorAll(".no-of-notes");

const availableNotes = [2000, 500, 100, 20, 10, 5, 1]; 

checkButton.addEventListener("click",function validateAmount() {
    var given = Number(cashGiven.value);
    var bill = Number(billAmount.value);
    message.style.display = "none";
    if (bill>0) {
        if (given >= bill) {
            var amountToBeReturned = cashGiven.value - billAmount.value;
            calculateChange(amountToBeReturned);

        } 
        else {
            
            errorHandler(
                'The cash provided should atleast be equal to the bill amount'
            )
        }
    } 
    else {
        
        errorHandler(
            'Invalid Value'
        )    };
});

function calculateChange(amountToBeReturned) {
    for(let i=0; i<availableNotes.length; i++) {
        var numberOfNotes = Math.trunc(
            amountToBeReturned/availableNotes[i]
        );
        amountToBeReturned=amountToBeReturned%availableNotes[i];
        
        if (numberOfNotes > 0)  {
            noOfNotes[i].innerText= numberOfNotes;
        } 
    };
};



function errorHandler(returnMessage) {

    message.style.display = "block";
    message.innerText= returnMessage;
    
};