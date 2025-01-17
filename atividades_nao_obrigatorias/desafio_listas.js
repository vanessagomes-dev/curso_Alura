/* Desafios Listas:
Crie uma lista vazia, com o nome listaGenerica.
Crie uma lista de linguagens de programação chamada linguagensDeProgramacao com os seguintes elementos: 'JavaScript','C','C++', 'Kotlin' e 'Python'.
Adicione à lista linguagensDeProgramacao os seguintes elementos: 'Java', 'Ruby' e 'GoLang'.
Crie uma lista com 3 nomes e exiba no console apenas o primeiro elemento.
Crie uma lista com 3 nomes e exiba no console apenas o segundo elemento.
Crie uma lista com 3 nomes e exiba no console apenas o último elemento. */
/*_____________________________________________________________________________*/

// 1. Criar uma lista vazia chamada listaGenerica
let listaGenerica = [];
console.log("Lista genérica:", listaGenerica);

// 2. Criar uma lista chamada linguagensDeProgramacao
let linguagensDeProgramacao = ['JavaScript', 'C', 'C++', 'Kotlin', 'Python'];
console.log("Linguagens de programação:", linguagensDeProgramacao);

// 3. Adicionar à lista linguagensDeProgramacao os elementos 'Java', 'Ruby' e 'GoLang'
linguagensDeProgramacao.push('Java', 'Ruby', 'GoLang');
console.log("Linguagens de programação atualizadas:", linguagensDeProgramacao);

// 4. Criar uma lista com 3 nomes e exibir apenas o primeiro elemento
let listaNomes1 = ['Alice', 'Bruno', 'Carla'];
console.log("Primeiro elemento da lista:", listaNomes1[0]);

// 5. Criar uma lista com 3 nomes e exibir apenas o segundo elemento
let listaNomes2 = ['Daniel', 'Eduardo', 'Fernanda'];
console.log("Segundo elemento da lista:", listaNomes2[1]);

// 6. Criar uma lista com 3 nomes e exibir apenas o último elemento
let listaNomes3 = ['Gabriel', 'Heloisa', 'Isabela'];
console.log("Último elemento da lista:", listaNomes3[listaNomes3.length - 1]);

/* Testando no console, o resultado foi:
Lista genérica: []
Linguagens de programação: [ 'JavaScript', 'C', 'C++', 'Kotlin', 'Python' ]
Linguagens de programação atualizadas: [ 'JavaScript', 'C', 'C++', 'Kotlin', 'Python', 'Java', 'Ruby', 'GoLang' ]
Primeiro elemento da lista: Alice
Segundo elemento da lista: Eduardo
Último elemento da lista: Isabela
 */
