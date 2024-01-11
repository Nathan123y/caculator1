document.addEventListener('DOMContentLoaded', function () {
    const display = document.getElementById('display');
    let currentOperation = null;
    let currentInput = "";

    const updateDisplay = () => {
        display.textContent = currentInput || "0";
    };

    document.querySelectorAll('.button.number, .button.operator').forEach(button => {
        button.addEventListener('click', () => {
            const value = button.getAttribute('data-num') || button.getAttribute('data-op');

            if (value === "=") {
                calculate();
            } else if (value === "C") {
                clear();
            } else {
                currentInput += value;
                updateDisplay();
            }
        });
    });

    const calculate = () => {
        if (currentInput) {
            try {
                currentInput = eval(currentInput);
                updateDisplay();
            } catch (error) {
                display.textContent = "Error";
            }
        }
    };
    
    document.getElementById('clear').addEventListener('click', () => {
        clear();
    });
    
    const clear = () => {
        currentInput = "";
        currentOperation = null;
        updateDisplay();
    };

    updateDisplay();
});
