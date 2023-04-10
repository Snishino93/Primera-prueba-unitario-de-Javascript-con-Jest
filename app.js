const sum = (a, b) => {
    return a + b
}

const oneEuroIs = {
    "USD": 1.2
}
const oneDollarIs = {
    "YEN": 133.64
}
const oneYenIs = {
    "GBP": 0.006
}

// declaramos una funcion con el mismo nombre "formEuroToDollar"
const fromEuroToDollar = function (valueInEuro) {
    // convertimos el valor a dolares
    let valueInDollar = valueInEuro * 1.2;
    // retornamos el valor
    return Number(valueInDollar.toFixed(2));
}
const fromDollarToYen = function (valueInDollar) {
    let valueInYen = valueInDollar * 133.64;
    return Number (valueInYen.toFixed(2));
}
const fromYenToPound = function (valueInYen) {
    let valueInPound = valueInYen * 0.006;
    return Number(valueInPound.toFixed(3));
}

// exporta la función para usarla en otros archivos 
module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound };
