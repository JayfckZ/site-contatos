const form = document.getElementById('form-contact')
const numeroContato = document.getElementById('numero-contato')
let contato = []
let linhas = ''

function verificaNum(numero){
    console.log(numero.length)
    if(numero.length != 11){
        return true
    }
    else{
        return false
    }
}

function verificaCon(numero){
    if(contato.includes(numero)){
        return true
    }
    else{
        return false
    }
}

function adicionarLinha(nome, numero){
    linha = '<tr>'
    linha += `<td>${nome}</td>`
    linha += `<td>(${numero.slice(0, 2)})${numero.slice(2, 7)}-${numero.slice(7)}</td>`
    linha += '</tr>'

    linhas += linha
    document.querySelector('tbody').innerHTML = linhas
    contato.push(numero)
}

form.addEventListener('submit', function(e){
    e.preventDefault()

    
    const nomeContato = document.getElementById('nome-contato')


    if(verificaNum(numeroContato.value)){
        numeroContato.classList.add('input-error')
        document.getElementById('message-error-con').style.display = 'none'
        document.getElementById('message-error-num').style.display = 'block'
    }
    else if(verificaCon(numeroContato.value)){
        numeroContato.classList.add('input-error')
        document.getElementById('message-error-num').style.display = 'none'
        document.getElementById('message-error-con').style.display = 'block'
    }
    else{
        adicionarLinha(nomeContato.value, numeroContato.value)

        nomeContato.value = ''
        numeroContato.value = ''
        numeroContato.classList.remove('input-error')
        document.getElementById('message-error-num').style.display = 'none'
        document.getElementById('message-error-con').style.display = 'none'
    }
})

