import {valida} from './validacao.js'

const inputs = document.querySelectorAll('input').values

inputs.forEach(input => {   
    input.addEventListener('blur', (evento) => {
        valida(evento.target)
    })
})