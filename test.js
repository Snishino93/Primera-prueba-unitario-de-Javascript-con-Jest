// importar la función sum del archivo app.js
const { sum } = require('./app.js');


test("One euro should be 1.206 dollars", function(){
    // importo la funcion desde app.js
    const { fromEuroToDollar } = require('./app.js')
    
    // hago mi comparacion (la prueba)
    expect(fromEuroToDollar(3.5)).toBe(4.2); //1 euro son 1.2 dolares, entonces 3.5 euros deberian ser = (3.5 * 1.2)
})

test("One dollar should be 133,65 Yen", function(){
    // importo la funcion desde app.js
    const { fromDollarToYen } = require('./app.js')
    
    // hago mi comparacion (la prueba)
    expect(fromDollarToYen(3.5)).toBe(465.5); //1 dollar son 133.6 yenes, entonces 3.5 euros deberian ser = (3.5 * 133.65)
})

test("One Yen should be 0,0060 Pound", function(){
    // importo la funcion desde app.js
    const { fromYenToPound } = require('./app.js')
    
    // hago mi comparacion (la prueba)
    expect(fromYenToPound(3.5)).toBe(0.021); //1 yen son 0.0060 libras, entonces 3.5 euros deberian ser = (3.5 * 0.0060)
})
