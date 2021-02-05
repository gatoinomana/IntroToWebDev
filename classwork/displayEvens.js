function validate() {

    // Remove validation styles activated by a previous validation
    let displayEvens = document.forms["displayEvens"];
    displayEvens.className = "needs-validation";

    // Add validation styles for current validation
    if (!displayEvens.checkValidity()) {
        displayEvens.className = "was-validated";
        return false;
    }

    // Display result
    let startValue = document.getElementById("startInput").value;
    let endValue = document.getElementById("endInput").value;
    let stepValue = document.getElementById("stepInput").value;

    document.getElementById("start").innerText = startValue;
    document.getElementById("end").innerText = endValue;
    document.getElementById("step").innerText = stepValue;

    let start = parseInt(startValue, 10);
    let end = parseInt(endValue, 10);
    let step = parseInt(stepValue, 10);
    let range = document.getElementById("range");
    range.innerText = "";

    for(let i = start; i <= end; i+=step) {
        if (i % 2 === 0) {
            let text = document.createTextNode(i.toString());
            let lineBreak = document.createElement('br');
            range.appendChild(text);
            range.appendChild(lineBreak);
        }
    }

    results.style.display = "block";

    // We always return false so that the form doesn't submit.
    // Submission causes the page to reload.
    return false;
}