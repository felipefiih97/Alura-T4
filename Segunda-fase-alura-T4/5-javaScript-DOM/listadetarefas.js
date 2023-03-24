const criarTarefa = (evento)=> {
    evento.preventDefault()

    const lista = document.querySelector('[data-list]')
    const input  = document.querySelector('[data-form-input]')
    const valor = input.value 

    const tarefa = document.createElement('li')
    tarefa.classList.add('task')
    

    const conteudo = `<p>${valor}</p>`

    
    tarefa.innerHTML = conteudo

    tarefa.appendChild(BotaoConclui())
    lista.appendChild(tarefa);
    input.value = " "
}


const novaTarefa = document.querySelector('[data-form-button]')


novaTarefa.addEventListener('click', criarTarefa)


const BotaoConclui = () => {
    const botaoConclui = document.createElement('button')
    botaoConclui.classList.add('check-list')
    botaoConclui.innerText = 'concluir'
    botaoConclui.addEventListener('click',concluirTarefa())

    return botaoConclui
}
/** 
 @param {Event} evento 
*/
const concluirTarefa = (evento) => {
    const botaoConclui = evento.target // mostra o alvo que foi clicado 
    
    const tarefaCompleta = botaoConclui.
}