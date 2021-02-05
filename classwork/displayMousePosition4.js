// if true, we're tracking the mouse
var tracking = false;
// Grab DOM references to be used in all functions
var mouseX = document.getElementById("mouseX");
var mouseY = document.getElementById("mouseY");
var hotSpots = document.getElementsByClassName("hot-spot");

function toggle() {
    let button = document.getElementById("btnToggle");

    if (tracking) {
        // Change style and content of button
        button.classList.remove("btn-danger");
        button.classList.add("btn-success");
        button.innerText = "Start mouse tracking. ";

        // Reset mouse position
        mouseX.innerText = "Untracked";
        mouseY.innerText = "Untracked";
    } else {
        // Change style and content of button
        button.classList.remove("btn-success");
        button.classList.add("btn-danger");
        button.innerText = "Stop mouse tracking. ";
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
for(let hp of hotSpots) {
    hp.addEventListener("click", toggle);
}
document.addEventListener("mousemove", updateMousePosition);