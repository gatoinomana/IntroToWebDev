/*
    Creator: Noelia Martinez
    Date created: 13/02/2021
    Last modified: 14/02/2021
*/

const form = document.getElementById("contact");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const phoneInput = document.getElementById("phone");
const contactDaysInput = document.getElementsByName("contact-days");
const pastCustomerInput = document.getElementsByName("past-customer");
const validFeedback = document.getElementById("valid-feedback");

// Add US phone input mask to phone input
$(document).ready(function(){
    $('#phone').mask('(000) 000-0000');
});

// Add handlers for custom validation of each field
nameInput.addEventListener("input", validateName);
emailInput.addEventListener("input", validateEmail);
phoneInput.addEventListener("input", validatePhone);
for(let checkbox of contactDaysInput) {
    checkbox.addEventListener("change", validateContactDays);
}
for(let radioButton of pastCustomerInput) {
    radioButton.addEventListener("input", validatePastCustomer);
}

// Validate form without submitting
function validateForm() {
    // Custom validation of each field
    validateName();
    validateEmail();
    validatePhone();
    validateContactDays();
    validatePastCustomer();
    
    // Hide Bootstrap validation styles from previous submission
    form.classList.add("needs-validation");
    validFeedback.style = "display: none;";

    // Show Bootstrap validation styles for this submission
    if (!form.checkValidity()) {
        form.classList.add("was-validated");
        return false;
    }
    // Temporarily show a 'form submitted correctly' message
    validFeedback.style = "display: block;";
    setTimeout(() => {validFeedback.style = "display: none;"}, 1500);

    // We always return false so that the form doesn't submit.
    // Submission causes the page to reload.
    return false;
}

// Remove all input and validation styles
function resetView() {
    validFeedback.style = "display: none;";
    form.classList.add("needs-validation");
    nameInput.focus();
}

function validateName() {
    const invalidFeedback = document.getElementById("name-invalid-feedback");
    let feedback = "";

    if (nameInput.validity.valueMissing) {
        feedback = "Name is required";
    }
    else if (nameInput.validity.patternMismatch) {
        feedback = "Name can only contain alphabetic characters";
    }
    invalidFeedback.innerHTML = feedback;
    nameInput.setCustomValidity(feedback);
}

function validateEmail() {
    const invalidFeedback = document.getElementById("email-invalid-feedback");
    let feedback = "";

    if (emailInput.validity.valueMissing) {
        feedback = "Email address is required";
    }
    else if (emailInput.validity.typeMismatch) {
        feedback = "The input is not a valid email address";
    } 
    invalidFeedback.innerHTML = feedback;
    emailInput.setCustomValidity(feedback);
}

function validatePhone() {
    const invalidFeedback = document.getElementById("phone-invalid-feedback");
    let feedback = "";

    if (phoneInput.validity.valueMissing) {
        feedback = "Phone number is required";
    }
    else if (phoneInput.validity.tooShort) {
        feedback = "Phone number must be a US number of 10 digits";
    }

    invalidFeedback.innerHTML = feedback;
    phoneInput.setCustomValidity(feedback);
}

function validateContactDays() {
    const invalidFeedback = document.getElementById("contact-days-invalid-feedback");

    // Reset .invalid-feedback style (hide again)
    invalidFeedback.style = "display: none;"

    // Count number of days checked
    let numberChecked = Array.from(contactDaysInput).filter(element => element.checked).length;

    // If one day to contact is checked, remove 'required' attribute from all
    if (numberChecked > 0) {
        Array.from(contactDaysInput).forEach((element) => {
            element.removeAttribute("required");
        });
    } 
    // If none are checked, reset all to required and display .invalid-feedback
    else {
        Array.from(contactDaysInput).forEach((element) => {
            element.required = true;
        });
        invalidFeedback.innerHTML = "At least one day is required";

        // Force display of .invalid-feedback, since Bootstrap won't because not preceded by .is-invalid element
        invalidFeedback.style = "display: inline !important;" 
    }
}

function validatePastCustomer() {
    const invalidFeedback = document.getElementById("past-customer-invalid-feedback");
    invalidFeedback.style = "display: none;"

    // Make sure one option is selected
    let numberChecked = Array.from(pastCustomerInput).filter(element => element.checked).length;
    if (numberChecked != 1) {
        invalidFeedback.innerHTML = "An answer is required";

        // Force display of .invalid-feedback, since Bootstrap won't because not preceded by .is-invalid element
        invalidFeedback.style = "display: inline !important;" 
    }
}
