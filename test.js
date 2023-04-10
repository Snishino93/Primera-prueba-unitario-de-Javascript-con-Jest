// importar la función sum del archivo app.js
const { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound } = require('./app.js');

test("One euro should be 1.206 dollars", function () {
    // hago mi comparacion (la prueba)
    expect(fromEuroToDollar(3.5)).toBe(4.2); //1 euro son 1.2 dolares, entonces 3.5 euros deberian ser = (3.5 * 1.2)
})

test("One dollar should be 133,64 Yen", function () {
    expect(fromDollarToYen(3.5)).toBe(467.74); //1 dollar son 133.64 yenes, entonces 3.5 euros deberian ser = (3.5 * 133.64)
})

test("One Yen should be 0,0060 Pound", function () {
    expect(fromYenToPound(3.5)).toBe(0.021); //1 yen son 0.0060 libras, entonces 3.5 euros deberian ser = (3.5 * 0.0060)
})
