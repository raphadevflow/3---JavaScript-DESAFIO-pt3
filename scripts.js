const convertButton = document.querySelector(".convert-button");
const currencySelect = document.querySelector(".currency-select");
const currencySelected = document.querySelector(".currency-selected");
const currencyValueToConvert = document.querySelector(".currency-value-to-convert");
const currencyValueConverted = document.querySelector(".currency-value");
const currencyName = document.getElementById("currency-name");
const currencyImg = document.querySelector(".currency-img");

const exchangeRates = {
    real: { dolar: 0.19, euro: 0.17, libra: 0.15, bitcoin: 0.0000027 },
    dolar: { real: 5.35, euro: 0.92, libra: 0.79, bitcoin: 0.000014 },
    euro: { real: 5.77, dolar: 1.08, libra: 0.85, bitcoin: 0.000016 },
    libra: { real: 6.79, dolar: 1.27, euro: 1.17, bitcoin: 0.000018 },
    bitcoin: { real: 368951.58, dolar: 69485.90, euro: 64253.61, libra: 54711.15 }
};

const currencyNames = {
    real: "Real Brasileiro",
    dolar: "Dólar Americano",
    euro: "Euro",
    libra: "Libra Esterlina",
    bitcoin: "Bitcoin"
};

const currencyImages = {
    real: "./assets/Real.jpg",
    dolar: "./assets/USD.jpg",
    euro: "./assets/Euro.jpg",
    libra: "./assets/libra.jpg",
    bitcoin: "./assets/bitcoin.jpg"
};

function formatCurrency(value, currency) {
    switch (currency) {
        case 'real':
            return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(value);
        case 'dolar':
            return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(value);
        case 'euro':
            return new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(value);
        case 'libra':
            return new Intl.NumberFormat('en-GB', { style: 'currency', currency: 'GBP' }).format(value);
        case 'bitcoin':
            return new Intl.NumberFormat('en-US', { style: 'decimal', minimumFractionDigits: 8, maximumFractionDigits: 8 }).format(value) + ' BTC';
    }
}

function convertValues() {
    const inputCurrencyValue = parseFloat(document.querySelector(".input-currency").value);
    const fromCurrency = currencySelected.value.replace('1', '');
    const toCurrency = currencySelect.value;

    const rate = exchangeRates[fromCurrency][toCurrency];
    const convertedValue = inputCurrencyValue * rate;

    currencyValueToConvert.innerHTML = formatCurrency(inputCurrencyValue, fromCurrency);
    currencyValueConverted.innerHTML = formatCurrency(convertedValue, toCurrency);

    currencyName.innerHTML = currencyNames[toCurrency];
    currencyImg.src = currencyImages[toCurrency];
}

function changedCurrency() {
    const fromCurrency = currencySelected.value.replace('1', '');
    const currencyNameFrom = document.getElementById("currency-named");
    const currencyImageFrom = document.querySelector(".currency-image");

    currencyNameFrom.innerHTML = currencyNames[fromCurrency];
    currencyImageFrom.src = currencyImages[fromCurrency];
}

currencySelected.addEventListener("change", changedCurrency);
currencySelect.addEventListener("change", convertValues);
convertButton.addEventListener("click", convertValues);
