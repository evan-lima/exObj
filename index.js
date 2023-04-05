function meuEscopo () {
const form = document.querySelector('.form');
const resultado = document.querySelector('.resultado');
const pessoas = [];
let indice = 0;

function criaObj(nome,sobrenome,altura,peso){ return {nome,sobrenome,altura,peso}};

function recebeEventoForm(evento){
    evento.preventDefault();

    const nome = form.querySelector('.nome');
    const sobrenome = form.querySelector('.sobrenome');
    const altura = form.querySelector('.altura');
    const peso = form.querySelector('.peso');

    pessoas.push(criaObj(nome.value, sobrenome.value, altura.value, peso.value));

    resultado.innerHTML += `<p>Nome: ${pessoas[indice].nome}<br>
                               Sobrenome: ${pessoas[indice].sobrenome}<br>
                               Altura: ${pessoas[indice].altura}<br>
                               Peso: ${pessoas[indice].peso}<br></p>`;
    indice++;

}

form.addEventListener('submit',recebeEventoForm);

}

meuEscopo();