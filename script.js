// Grab elements
const sachinElement = document.getElementById("sachinRuns");
const rootElement = document.getElementById("rootRuns");
const counterElement = document.getElementById("counter");

// Target values
const sachinRuns = 15921;
const rootRuns = 13686;
const runsNeeded = 2236;
const startNeeded = 15922;

// Duration for animations
const duration = 70000; // ms
const frameRate = 60;  // ms per frame

// Universal animate function
function animateValue(element, start, end, prefix = "", suffix = "") {
    const range = end - start;
    const steps = Math.ceil(duration / frameRate);
    const increment = range / steps;
    let current = start;
    let stepCount = 0;

    const timer = setInterval(() => {
        stepCount++;
        current += increment;

        if (stepCount >= steps) {
            current = end; // stop exactly at end value
            clearInterval(timer);
        }

        element.innerText = `${prefix}${Math.floor(current).toLocaleString()}${suffix}`;
    }, frameRate);
}

// Animate Sachin & Root upwards
animateValue(sachinElement, 0, sachinRuns, "Sachin Runs: ");
animateValue(rootElement, 0, rootRuns, "Root Runs: ");

// Animate countdown downwards
animateValue(counterElement, startNeeded, runsNeeded, "");
