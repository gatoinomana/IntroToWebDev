// if true, we're tracking the mouse
var tracking = false;
// Grab DOM references to be used in all functions
var mouseX = document.getElementById("mouseX");
var mouseY = document.getElementById("mouseY");

function toggle() {

    let alert = document.getElementById("alertToggle");
    if (tracking) {
        // Change style and content of button
        alert.classList.remove("alert-success");
        alert.classList.add("alert-dark");
        alert.innerText = "Mouse tracking: OFF";

        // Reset mouse position
        mouseX.innerText = "Untracked";
        mouseY.innerText = "Untracked";
    } else {
        // Change style and content of button
        alert.classList.remove("alert-dark");
        alert.classList.add("alert-success");
        alert.innerText = "Mouse tracking: ON";
    }

    // Toggle flag
    tracking = !tracking;
}

function updateMousePosition(evt) {
    // If tracking is enabled, update the view
    if (tracking) {
        mouseX.innerText = evt.clientX;
        mouseY.innerText = evt.clientY;
    }
}

// Listen for events
document.addEventListener("click", toggle);
document.addEventListener("mousemove", updateMousePosition);