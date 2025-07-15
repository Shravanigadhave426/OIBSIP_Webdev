
function convertTemperature() {
    const inputValue = parseFloat(document.getElementById('tempInput').value);
    const inputType = document.getElementById('inputType').value;
    const resultDiv = document.getElementById('result');

    if (isNaN(inputValue)) {
        resultDiv.textContent = "❗ Please enter a valid numeric value.";
        return;
    }

    let celsius;

    if (inputType === "Kelvin") {
        celsius = inputValue - 273.15;
        resultDiv.innerHTML = `${inputValue} K = ${celsius.toFixed(2)} °C`;
    } else if (inputType === "fahrenheit") {
        celsius = (inputValue - 32) * 5 / 9;
        resultDiv.innerHTML = `${inputValue} °F = ${celsius.toFixed(2)} °C`;
    } else {
        resultDiv.textContent = "❌ Invalid input type selected.";
    }
}

function resetFields() {
    document.getElementById('tempInput').value = "";
    document.getElementById('inputType').value = "Kelvin";
    document.getElementById('result').textContent = "";
}
