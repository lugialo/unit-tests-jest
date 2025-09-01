const Utilitarios = require('../src/utilitarios');

describe("Teste da classe Utilitarios", () => {
    let utilitarios;

    beforeEach(() => {
        utilitarios = new Utilitarios;
    })

    test("Deve inverter uma string corretamente", async () => {
        const stringInvertida = utilitarios.inverterString('Maria')
        expect(stringInvertida).toBe('airaM');
    })

    test("Deve contar a quantidade de caracteres corretamente", async () => {
        const stringContada = utilitarios.contarCaracteres('Maria')
        expect(stringContada).toBe(5);
    })

    test("Deve converter todas as letras para maiúsculas", async () => {
        const stringConvertidaMaiuscula = utilitarios.paraMaiusculas('Maria')
        expect(stringConvertidaMaiuscula).toBe('MARIA');
    })

    test("Deve converter todas as letras para minúscula", async () => {
        const stringConvertidaMinuscula = utilitarios.paraMinusculas('MARIA')
        expect(stringConvertidaMinuscula).toBe('maria');
    })

    test("Deve converter a primeira letra para maiúscula", async () => {
        const stringVerificadaMaiuscula = utilitarios.primeiraLetraMaiuscula('maria')
        expect(stringVerificadaMaiuscula).toBe('Maria');
    })

    test("Deve somar dois números corretamente", async () => {
        const resultado = utilitarios.somar(5, 3);
        expect(resultado).toBe(8);
    })

    test("Deve subtrair dois números corretamente", async () => {
        const resultado = utilitarios.subtrair(10, 4);
        expect(resultado).toBe(6);
    })

    test("Deve multiplicar dois números corretamente", async () => {
        const resultado = utilitarios.multiplicar(6, 7);
        expect(resultado).toBe(42);
    })

    test("Deve dividir dois números corretamente", async () => {
        const resultado = utilitarios.dividir(15, 3);
        expect(resultado).toBe(5);
    })

    test("Deve lançar erro ao dividir por zero", async () => {
        expect(() => utilitarios.dividir(10, 0)).toThrow("Divisão por zero");
    })

    test("Deve verificar se número é par", async () => {
        const resultado = utilitarios.ehPar(4);
        expect(resultado).toBe(true);
    })

    test("Deve verificar se número é ímpar", async () => {
        const resultado = utilitarios.ehPar(5);
        expect(resultado).toBe(false);
    })

    test("Deve retornar primeiro elemento do array", async () => {
        const resultado = utilitarios.primeiroElemento([1, 2, 3]);
        expect(resultado).toBe(1);
    })

    test("Deve retornar último elemento do array", async () => {
        const resultado = utilitarios.ultimoElemento([1, 2, 3]);
        expect(resultado).toBe(3);
    })

    test("Deve retornar tamanho do array", async () => {
        const resultado = utilitarios.tamanhoArray([1, 2, 3, 4]);
        expect(resultado).toBe(4);
    })

    test("Deve ordenar array corretamente", async () => {
        const resultado = utilitarios.ordenarArray([3, 1, 2]);
        expect(resultado).toEqual([1, 2, 3]);
    })

    test("Deve inverter array corretamente", async () => {
        const resultado = utilitarios.inverterArray([1, 2, 3]);
        expect(resultado).toEqual([3, 2, 1]);
    })

    test("Deve verificar se valor é número", async () => {
        const resultado = utilitarios.ehNumero(42);
        expect(resultado).toBe(true);
    })

    test("Deve verificar se valor não é número", async () => {
        const resultado = utilitarios.ehNumero("42");
        expect(resultado).toBe(false);
    })

    test("Deve remover espaços da string", async () => {
        const resultado = utilitarios.removerEspacos("  Maria  ");
        expect(resultado).toBe("Maria");
    })

    test("Deve repetir texto corretamente", async () => {
        const resultado = utilitarios.repetirTexto("Hi", 3);
        expect(resultado).toBe("HiHiHi");
    })

    test("Deve juntar array com separador", async () => {
        const resultado = utilitarios.juntarArray([1, 2, 3], "-");
        expect(resultado).toBe("1-2-3");
    })

    test("Deve contar palavras corretamente", async () => {
        const resultado = utilitarios.contarPalavras("Hello world test");
        expect(resultado).toBe(3);
    })

    test("Deve calcular média do array", async () => {
        const resultado = utilitarios.mediaArray([2, 4, 6]);
        expect(resultado).toBe(4);
    })

    test("Deve remover duplicados do array", async () => {
        const resultado = utilitarios.removerDuplicados([1, 2, 2, 3, 3]);
        expect(resultado).toEqual([1, 2, 3]);
    })

    test("Deve verificar se string é palíndromo", async () => {
        const resultado = utilitarios.ehPalindromo("arara");
        expect(resultado).toBe(true);
    })

    test("Deve mesclar objetos corretamente", async () => {
        const obj1 = { a: 1, b: 2 };
        const obj2 = { c: 3, d: 4 };
        const resultado = utilitarios.mesclarObjetos(obj1, obj2);
        expect(resultado).toEqual({ a: 1, b: 2, c: 3, d: 4 });
    })



    


});