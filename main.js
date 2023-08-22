let form = document.getElementById('form');
let NomesCadastrados = [];
let telefonesCadastrados = [];
let linhas = '';
let resultado = document.getElementById('tfoot')

form.addEventListener('submit', function(eventos) {
    eventos.preventDefault();
    adicionaLinha();
    atualizaTabela();
    
})

function adicionaLinha() {
    let inputNome = document.getElementById('idnome');
    let inputTelefone = document.getElementById('idtelefone');

    if (telefonesCadastrados.includes(Number(inputTelefone.value))) {
        resultado.innerHTML = '<tr><td colspan="2" class="nao-cadastrado">Esse numero já foi cadastrado!</td></tr>'
    } else {
        NomesCadastrados.push(inputNome.value);
        telefonesCadastrados.push(parseFloat(inputTelefone.value));

        let linha = '<tr>';
        linha += `<td>${inputNome.value}</td>`;
        linha += `<td>${inputTelefone.value}</td>`;
        linha += '</tr>';

        linhas += linha;
        resultado.innerHTML = '<tr><td colspan="2" class="cadastrado">Cadastro realizado com sucesso!</td></tr>'
    }

    inputNome.value = ''
    inputTelefone.value = '';
}

function atualizaTabela() {
    let corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}