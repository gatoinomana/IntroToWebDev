// These elements will be used in both functions.
var numberFun = document.forms["numberFun"];
var num1 = document.getElementById("num1");
var num2 = document.getElementById("num2");
var results = document.getElementById("results");
var submitButton = document.getElementById("submitButton");

function validate() {

    // Remove validation styles activated by a previous validation
    numberFun.className = "needs-validation";

    // Add validation styles for current validation
    if (!numberFun.checkValidity()) {
        numberFun.className = "was-validated";
        return false;
    }

    // Fill and display results table
    var operand1 = parseInt(num1.value, 10);
    var operand2 = parseInt(num2.value, 10);

    document.getElementById("addResult").innerText = operand1 + operand2;
    document.getElementById("substractResult").innerText = operand1 - operand2;
    document.getElementById("multiplyResult").innerText = operand1 * operand2;
    document.getElementById("divideResult").innerText = operand1 / operand2;
    
    results.style.display = "block";
    submitButton.innerText = "Recalculate";

    // We always return false so that the form doesn't submit.
    // Submission causes the page to reload.
    return false;
}

function resetView() {
    numberFun.className = "needs-validation";
    results.style.display = "none";
    submitButton.innerText = "Calculate";
    num1.focus();
}