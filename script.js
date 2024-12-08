// Append value to the display
function appendValue(value) {
    const display = document.getElementById('display');
    display.value += value;
}

// Clear the display
function clearDisplay() {
    const display = document.getElementById('display');
    display.value = '';
}

// Calculate the result
function calculate() {
    const display = document.getElementById('display');
    try {
        display.value = eval(display.value); // Evaluates the mathematical expression
    } catch (error) {
        display.value = 'Error'; // Handle invalid input
    }
}
