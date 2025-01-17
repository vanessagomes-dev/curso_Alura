// Desafios:

/* Crie uma função que calcule o índice de massa corporal (IMC) de uma pessoa, a partir de sua altura, em metros, e peso, em quilogramas, que serão recebidos como parâmetro.

Crie uma função que calcule o valor do fatorial de um número passado como parâmetro.

Crie uma função que converte um valor em dólar, passado como parâmetro, e retorna o valor equivalente em reais. Para isso, considere a cotação do dólar igual a R$4,80.

Crie uma função que mostre na tela a área e o perímetro de uma sala retangular, utilizando altura e largura que serão dadas como parâmetro.

Crie uma função que mostre na tela a área e o perímetro de uma sala circular, utilizando seu raio que será fornecido como parâmetro. Considere Pi = 3,14.

Crie uma função que mostre na tela a tabuada de um número dado como parâmetro. */
/*_______________________________________________________________________________*/

// Função 1: Calcular o IMC
function calcularIMC(peso, altura) {
    let imc = peso / (altura * altura);
    return imc.toFixed(2); // Retorna o IMC com 2 casas decimais
}

// Função 2: Calcular o fatorial
function calcularFatorial(numero) {
    if (numero === 0 || numero === 1) return 1; // Caso base
    let fatorial = 1;
    for (let i = 2; i <= numero; i++) {
        fatorial *= i;
    }
    return fatorial;
}

// Função 3: Converter dólar para reais
function converterDolarParaReal(valorEmDolar) {
    const cotacaoDolar = 4.80;
    return (valorEmDolar * cotacaoDolar).toFixed(2); // Retorna o valor em reais com 2 casas decimais
}

// Função 4: Calcular área e perímetro de uma sala retangular
function salaRetangular(altura, largura) {
    const area = altura * largura;
    const perimetro = 2 * (altura + largura);
    return `Área: ${area.toFixed(2)} m², Perímetro: ${perimetro.toFixed(2)} m`;
}

// Função 5: Calcular área e perímetro de uma sala circular
function salaCircular(raio) {
    const pi = 3.14;
    const area = pi * raio * raio;
    const perimetro = 2 * pi * raio;
    return `Área: ${area.toFixed(2)} m², Perímetro: ${perimetro.toFixed(2)} m`;
}

// Função 6: Mostrar a tabuada de um número
function mostrarTabuada(numero) {
    let tabuada = '';
    for (let i = 1; i <= 10; i++) {
        tabuada += `${numero} x ${i} = ${numero * i}\n`;
    }
    return tabuada;
}

// Testando todas as funções
console.log("1. Cálculo de IMC:");
console.log(calcularIMC(70, 1.75)); // Exemplo: Peso 70 kg, Altura 1.75 m

console.log("\n2. Cálculo do Fatorial:");
console.log(calcularFatorial(5)); // Exemplo: Fatorial de 5

console.log("\n3. Conversão de Dólar para Reais:");
console.log(converterDolarParaReal(10)); // Exemplo: $10 para reais

console.log("\n4. Área e Perímetro de uma Sala Retangular:");
console.log(salaRetangular(5, 10)); // Exemplo: Altura 5m, Largura 10m

console.log("\n5. Área e Perímetro de uma Sala Circular:");
console.log(salaCircular(5)); // Exemplo: Raio 5m

console.log("\n6. Tabuada:");
console.log(mostrarTabuada(7)); // Exemplo: Tabuada do número 7
