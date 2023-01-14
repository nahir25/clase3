const {fn, arr} = require('./index')


describe("solucion", () => {
    test('deberias devolver "naruto shippuden"', () => {
       expect(fn(arr)[0]).toBe("naruto shippuden") 
    });
    test('deberias devolver "muere L"', () => {
        expect(fn(arr)[1]).toBe("muere L") 
     });
})