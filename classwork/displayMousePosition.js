// if true, we're tracking the mouse
var tracking = false;
// Grab DOM references to be used in all functions
var mouseX = document.getElementById("mouseX");
var mouseY = document.getElementById("mouseY");

function toggle() {

    if (tracking) {
        // Change style and content of button
        this.classList.remove("btn-danger");
        this.classList.add("btn-success");
        this.innerText = "Start mouse tracking. ";

        // Reset mouse position
        mouseX.innerText = "Untracked";
        mouseY.innerText = "Untracked";
    } else {
        // Change style and content of button
        this.classList.remove("btn-success");
        this.classList.add("btn-danger");
        this.innerText = "Stop mouse tracking. ";
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
document.getElementById("btnToggle").addEventListener("click", toggle);
document.addEventListener("mousemove", updateMousePosition);