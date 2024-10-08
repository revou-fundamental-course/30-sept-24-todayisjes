const inputSuhu = document.getElementById('input-suhu');
const outputSuhu = document.getElementById('output-suhu');
const howCalculate = document.getElementById('how-calculate-suhu');
const konversiBtn = document.querySelector('.form-btn-konversi');
const resetBtn = document.querySelector('.form-btn-reset');
const reverseBtn = document.querySelector('.form-btn-reverse');

// Fungsi untuk konversi dari Celsius ke Fahrenheit
function konversiSuhu() {
    const celsius = parseFloat(inputSuhu.value);
    if (!isNaN(celsius)) {
        const fahrenheit = (celsius * 9/5) + 32;
        outputSuhu.value = fahrenheit.toFixed(2); // Menampilkan hasil dengan 2 desimal
        howCalculate.value = `${celsius}°C * (9/5) + 32 = ${fahrenheit.toFixed(2)}°F`;
    } else {
        alert("Masukkan nilai Celsius!");
    }
}

// Fungsi untuk mereset inputan
function resetInput() {
    inputSuhu.value = '';
    outputSuhu.value = '';
    howCalculate.value = '';
}

// Fungsi untuk reverse konversi dari Fahrenheit ke Celsius
function reverseKonversi() {
    const fahrenheit = parseFloat(outputSuhu.value);
    if (!isNaN(fahrenheit)) {
        const celsius = (fahrenheit - 32) * 5/9;
        inputSuhu.value = celsius.toFixed(2); // Menampilkan hasil dengan 2 desimal
        howCalculate.value = `${fahrenheit}°F - 32 * (5/9) = ${celsius.toFixed(2)}°C`;
    } else {
        alert("Masukkan nilai Fahrenheit!");
    }
}

konversiBtn.addEventListener('click', (event) => {
    event.preventDefault();
    konversiSuhu();
});

resetBtn.addEventListener('click', (event) => {
    event.preventDefault();
    resetInput();
});

reverseBtn.addEventListener('click', (event) => {
    event.preventDefault();
    reverseKonversi();
});