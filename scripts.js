const convertButton = document.querySelector(".convert-button")

function convertValues() {
    const inputCurrencyValue = document.querySelector(".input-currency").value
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert") //Valor em Real
    const currencyValueConverted = document.querySelector(".currency-value") // Outras moedas
    const currencySelect = document.querySelector(".currency-select")

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

convertButton.addEventListener("click", convertValues)

