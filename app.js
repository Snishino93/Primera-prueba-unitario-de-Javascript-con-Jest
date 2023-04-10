const sum = (a,b) => {
    return a + b
}

// declaramos una funcion con el mismo nombre "formEuroToDollar"
const fromEuroToDollar = function(valueInEuro){
    // convertimos el valor a dolares
    let valueInDollar = valueInEuro * 1.2;
    // retornamos el valor
    return valueInDollar;
}
const fromDollarToYen = function(valueInDollar){
    // convertimos el valor a dolares
    let valueInYen = valueInDollar * 133.0;
    // retornamos el valor
    return valueInYen;
}
const fromYenToPound = function(valueInYen){
    // convertimos el valor a dolares
    let valueInPound = valueInYen * 0.0060;
    // retornamos el valor
    return valueInPound;
}
// one euro is:
let oneEuroIs = {
    "USD": 1.2, // us dollar
}
let oneDollarIs = {
    "YEN": 133.0, // yen
}
let oneYenIs = {
    "GBP": 0.0060, // pounds
}
// exporta la función para usarla en otros archivos 
// (similar a la palabra clave `export` cuando se usa webpack)
module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound };
