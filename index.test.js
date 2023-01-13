const {testObj} = require('./index');

describe("Ejercicio de objetos", () => {
    test('deberías entregar el siguiente objeto', () => {
        expect(testObj({})).toEqual({
            nombre: "Nahir",
            edad: 20,
            hobbies: {
                musica: "Rock",
                juego: "Tenis",
                juegosMesa: {
                    ajedrez:{
                        piezas: 64
                    }
                }
            },
            enojos:{
                gritos: true,
                manzana: false, 
            }
        })
    });
})