//VÁRIAVEIS DEFINIDAS PARA SELECIONAR ELEMENTOS DA DOM A SEREM MANIPULADAS DO HTML PARA EXIBIR RESULTADOS E RECEBER INFORMAÇÕES DO USUARÁIO
const convertButton = document.querySelector(".convert-button"); //Variável usada para adicionar um evento de clique,quando o botão for pressionado, a conversão é executada.
const currencySelect = document.querySelector(".currency-select"); //Variável usada para obter o valor da moeda selecionada.
const currencySelected = document.querySelector(".currency-selected");//Variável usada para obter o valor da moeda de origem selecionada que deseja converter.
const currencyValueToConvert = document.querySelector(".currency-value-to-convert");//Variável usada para atualizar e exibir o valor da moeda que está convertendo.
const currencyValueConverted = document.querySelector(".currency-value");//Variável usada para atualizar e exibir o valor da moeda após a conversão.
const currencyName = document.getElementById("currency-name");//Variável usada para atualizar e exibir o nome da moeda para a qual o valor foi convertido.
const currencyImg = document.querySelector(".currency-img");//Variável usada para atualizar a imagem com o visual da moeda convertida.

//VARIAVEL DAS TAXAS DE CÂMBIO DEFINIDAS E ARMAZENADAS ENTRE AS DIFERENTES MOEDAS
const exchangeRates = {
    real: { dolar: 0.19, euro: 0.17, libra: 0.15, bitcoin: 0.0000027 },
    dolar: { real: 5.35, euro: 0.92, libra: 0.79, bitcoin: 0.000014 },
    euro: { real: 5.77, dolar: 1.08, libra: 0.85, bitcoin: 0.000016 },
    libra: { real: 6.79, dolar: 1.27, euro: 1.17, bitcoin: 0.000018 },
    bitcoin: { real: 368951.58, dolar: 69485.90, euro: 64253.61, libra: 54711.15 }
};
//VARIAVEL COM OS NOMES CORRESPONDENTE A CADA MOEDA
const currencyNames = {
    real: "Real Brasileiro",
    dolar: "Dólar Americano",
    euro: "Euro",
    libra: "Libra Esterlina",
    bitcoin: "Bitcoin"
};
//VARIAVEL COM AS IMAGENS CORRESPONDENTE A CADA MOEDA
const currencyImages = {
    real: "./assets/Real.jpg",
    dolar: "./assets/USD.jpg",
    euro: "./assets/Euro.jpg",
    libra: "./assets/libra.jpg",
    bitcoin: "./assets/bitcoin.jpg"
};
//FUNÇÃO CRIADA PARA FORMATAR OS VALORES DAS MOEDAS DE A CORDO COM A REGIÃO E A MOEDA CORRENPONDENTE 
function formatCurrency(value, currency) {//VALUE, valor numérico a ser formatado. CURRENCY, moeda em que o valor deve ser formatado
    switch (currency) { //Cada case no switch lida com um tipo específico de moeda, aplicando a formatação necessária e retornando o valor formatado.
        case 'real':
            return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(value);
        case 'dolar':
            return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(value);
        case 'euro':
            return new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(value);
        case 'libra':
            return new Intl.NumberFormat('en-GB', { style: 'currency', currency: 'GBP' }).format(value);
        case 'bitcoin':
            return new Intl.NumberFormat('en-US', { style: 'decimal', minimumFractionDigits: 8, maximumFractionDigits: 8 }).format(value) + "BTC";
    }
}
//FUNÇÃO QUE FAZ A OCNVERSÃO DE UMA MOEDA ENTRE OUTRA UTILIZA AS TAXAS DE CÂMBIO E MOSTRA O RESULTADO
function convertValues() {   /*PARSEFLOAT Converte a string de value para um número de ponto flutuante.*/
    const inputCurrencyValue = parseFloat(document.querySelector(".input-currency").value);/*Seleciona o elemento HTML */

    //replace('1', ''): Remove o '1' do final da string 
    const fromCurrency = currencySelected.value.replace('1', ''); //Obtem a moeda de origem selecionada e remove o '1' do final da string por exempo real1 se torna somente real

    const toCurrency = currencySelect.value; //Obter a moeda de destino selecionada

    //RATE Obtem a taxa de câmbio entre a moeda de origem e a moeda de destino.
    const rate = exchangeRates[fromCurrency][toCurrency]; //[fromCurrency][toCurrency]: Acessa a taxa de câmbio específica entre a moeda de origem (fromCurrency) e a moeda de destino (toCurrency).

    // Calcula o valor convertido multiplicando o valor de entrada pela taxa de câmbio
    const convertedValue = inputCurrencyValue * rate; // inputCurrencyValue: O valor numérico de entrada que desejo converter. rate: A taxa de câmbio entre a moeda de origem e a moeda de destino. inputCurrencyValue * rate: Realiza a multiplicação para obter o valor convertido.

    //Atualizar o HTML para mostrar o valor da moeda de origem no formato apropriado
    currencyValueToConvert.innerHTML = formatCurrency(inputCurrencyValue, fromCurrency);

    // Atualizar o HTML para mostrar o valor convertido no formato apropriado.
    currencyValueConverted.innerHTML = formatCurrency(convertedValue, toCurrency);

    //Atualiza o HTML para mostrar o nome da moeda de destino.
    currencyName.innerHTML = currencyNames[toCurrency];

    //Atualiza a imagem para mostrar a bandeira ou símbolo correspondente à moeda de destino.
    currencyImg.src = currencyImages[toCurrency];

    //Cada passo é crucial para garantir que a conversão de moeda seja precisa e que a interface reflita as informações corretas.
}


//FUNÇÃO QUE ATUALIZA O NOME E A IMAGEM DA MOEDA QUANDO É ALTERADA 
function changedCurrency() {
    const fromCurrency = currencySelected.value.replace('1', '');
    const currencyNameFrom = document.getElementById("currency-named");
    const currencyImageFrom = document.querySelector(".currency-image");

    currencyNameFrom.innerHTML = currencyNames[fromCurrency];
    currencyImageFrom.src = currencyImages[fromCurrency];
    convertValues()
}
//EVENT LISTENER CRIADOS  PARA ACOSSIAR AOS ELEMENTOS E CHAMAR AS FUNÇÕES QUANDO NECESSÁRIO 
currencySelected.addEventListener("change", changedCurrency);
currencySelect.addEventListener("change", convertValues);
convertButton.addEventListener("click", convertValues);
