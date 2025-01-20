// array para armazenar os nomes
let amigos = [];

// Função para adicionar um amigo à lista
function adicionarAmigo() {
    const input = document.getElementById('amigo'); 
    const nome = input.value.trim(); // Remove espaços em branco

    if (nome === '') {
        alert('Por favor, insira um nome válido.');
        return;
    }

    amigos.push(nome); 
    atualizarLista(); 
    input.value = ''; 
    input.focus(); 
}

// exibe a lista de amigos na página
function atualizarLista() {
    const lista = document.getElementById('listaAmigos');
    lista.innerHTML = ''; 

    amigos.forEach((amigo, index) => {
        const li = document.createElement('li');
        li.textContent = `${index + 1}. ${amigo}`;
        lista.appendChild(li);
    });
}

// sortear amigo secreto
function sortearAmigo() {
    if (amigos.length === 0) {
        alert('A lista está vazia! Adicione nomes antes de realizar o sorteio.');
        return;
    }

    const indiceSorteado = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[indiceSorteado];

    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `O amigo secreto é: <strong>${amigoSorteado}</strong>! 🎉`;
}
