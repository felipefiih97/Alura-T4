//Aqui dentro eu faço toda a comunicação com a API.

// template que recebe os dados  da API e gera um template 
const criaNovaLinha = (nome,email) => { 
    const linhaNovoCliente = document.createElement('tr') 
    
    const conteudo = `
    <td class="td" data-td>${nome}</td>
    <td;>${email}</td>
    <td>
        <ul class="tabela__botoes-controle">
            <li><a href="../telas/edita_cliente.html" class="botao-simples botao-simples--editar">Editar</a></li>
            <li><button class="botao-simples botao-simples--excluir" type="button">Excluir</button></li>
        </ul>
    </td>
    `
    linhaNovoCliente.innerHTML = conteudo ;
    return linhaNovoCliente
}


const tabela = document.getElementById('data-tabela');
// aqui faz a conexão com a API
const listaClientes = () => {
    return fetch('http://localhost:3000/profile')
        .then( resposta => {
            return resposta.json()
        })
}

//aqui eu faço uma interação na resposta de lista cliente e mostro os dados na tela 
listaClientes()
.then( data => {
        data.forEach( dado => {
        tabela.appendChild(criaNovaLinha(dado.nome,dado.email))
    })
})