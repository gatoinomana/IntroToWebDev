const luckySevens = document.forms["lucky-sevens"];
const results = document.getElementById("results");
const betInput = document.getElementById("bet-input");

function validate() {
    const invalidFeedback = document.getElementById("bet-invalid-feedback");

    // Remove validation styles activated by a previous validation
    luckySevens.className = "needs-validation";
    invalidFeedback.style = "display: none;"

    // Add validation styles for current validation
    if (!luckySevens.checkValidity()) {
        luckySevens.className = "was-validated";

        // Force display of .invalid-feedback, since Bootstrap won't because not preceded by .is-invalid element
        invalidFeedback.style = "display: inline !important;"

        return false;
    }

    gameLoop(parseFloat(betInput.value));

    // We always return false so that the form doesn't submit.
    // Submission causes the page to reload.
    return false;
}

function gameLoop(startingBet) {
    let gameMoney = startingBet;
    let rollCount = 0;
    let rollsBeforeBroke = 0;
    let maxMoney = 0;
    let rollsAtMaxMoney = 0;

    while (gameMoney > 0) {

        // Roll two dice
        rollCount += 1; // understanding one roll as one roll of 2 dice
        let dieOne = rollDice(6);
        let dieTwo = rollDice(6);
        if (dieOne + dieTwo == 7) {
            gameMoney += 4.00;
        } else {
            gameMoney -= 1.00;
        }

        // Check if highest amount won
        if (gameMoney > maxMoney) {
            maxMoney = gameMoney;
            rollsAtMaxMoney = rollCount;
        }
    }
    
    rollsBeforeBroke = rollCount; // Exits loop when gameMoney <= 0

    printResults(startingBet, rollsBeforeBroke, maxMoney, rollsAtMaxMoney);
}

function rollDice(numSides) {
    return Math.floor(Math.random() * numSides) + 1;
}

function printResults(startingBet, rollsBeforeBroke, maxMoney, rollsAtMaxMoney) {
    document.getElementById("starting-bet").innerText = startingBet;
    document.getElementById("rolls-before-broke").innerText = rollsBeforeBroke;
    document.getElementById("max-money").innerText = maxMoney.toFixed(2); // show with 2 decimals only
    document.getElementById("rolls-max-money").innerText = rollsAtMaxMoney;
    results.style.display = "block";
    submitButton.innerText = "Play Again";
}

function resetView() {
    luckySevens.className = "needs-validation";
    results.style.display = "none";
    submitButton.innerText = "Play";
    betInput.focus();
}