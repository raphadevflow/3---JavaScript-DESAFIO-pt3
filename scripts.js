const convertButton = document.querySelector(".convert-button");
const currencySelect = document.querySelector(".currency-select");
const apiKey = "8c19250981ca4f9058f02a93";
let exchangeRates = {};


function convertValues() {
    const inputCurrencyValue = document.querySelector(".input-currency").value
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert") //Valor em Real
    const currencyValueConverted = document.querySelector(".currency-value") // Outras moedas


    console.log(currencySelect.value)

    const dolarToday = 5.2
    const euroToday = 6.2





    if (currencySelect.value == "dolar") { //se o select estiver selecionado o valor de dolar, entre aqui
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue / dolarToday)
    }

    if (currencySelect.value == "euro") { //se o select estiver selecionado o valor de euro, entre aqui
        currencyValueConverted.innerHTML = Intl.NumberFormat("de-DE", {
            style: "currency",
            currency:"EUR"
        }).format(inputCurrencyValue / euroToday)

    }

    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(inputCurrencyValue)



    console.log(convertedValue)
}


function changeCurrency() {
    const currencyName = document.getElementById ("currency-name")
    const currencyImage = document.querySelector(".currency-img")

    if(currencySelect.value == "dolar"){
        currencyName.innerHTML = "Dólar americano"
        currencyImage.src = "./assets/USD.jpg"
    }
    
    if(currencySelect.value == "euro"){
        currencyName.innerHTML = "Euro"
        currencyImage.src = "./assets/Euro.jpg"
    }
    
    convertValues()
}



currencySelect.addEventListener("change", changeCurrency)
convertButton.addEventListener("click", convertValues)