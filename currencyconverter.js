const CC = require('currency-converter-lt')

let currencyConverter = new CC()

let ratesCacheOptions = {
    isRatesCaching: true, 
    ratesCacheDuration: 3600 
}

currencyConverter = currencyConverter.setupRatesCache(ratesCacheOptions)

module.exports = currencyConverter

currencyConverter.from("AUD").to("NPR").amount(1).convert().then((response) => {
    console.log(response) 
})