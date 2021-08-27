const billAmount = document.querySelector("#bill-amount");
const cashGiven = document.querySelector("#cash-amount");
const checkButton = document.querySelector("#check-button");
const message = document.querySelector("#error-message");
const noOfNotes = document.querySelectorAll(".no-of-notes");

var availablenotes = [2000, 500, 100, 20, 10, 5, 1];


checkButton.addEventListener("click", function handleClick() {
  hide();

  if (billAmount.value > 0) {

    if (cashGiven.value >= billAmount.value) {
      var amountToBeReturned = cashGiven.value - billAmount.value;
      calculateChangeNote(amountToBeReturned);

    }else {
      showMessage("Do you wanna wash plates?")
    }

  }else{
    showMessage("Invalid bill amount");
  }
});

function calculateChangeNote(amountToBeReturned){

  for (var i = 0; i < availablenotes.length; i++) {
    const numberOfNotes = Math.trunc(amountToBeReturned / availablenotes[i]);
    amountToBeReturned = amountToBeReturned % availablenotes[i];
    noOfNotes[i].innerText = numberOfNotes;
  }

}

function showMessage(errorMessage) {
  message.style.display = "block";
  message.innerText = errorMessage;
}

function hide() {
  message.style.display = "none";
}
