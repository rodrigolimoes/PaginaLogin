const submit = document.querySelector('.submit')

function validation(nome,senha){
    const inputnome =document.querySelector('input[type="text"]')
    const inputsenha =document.querySelector('input[type="password"]')
    const errorNome= document.querySelector('.errornome')
    const errorSenha= document.querySelector('.errorsenha')
    const msgErrorNome = document.querySelector('.msgErrorNome')
    const msgErrorSenha = document.querySelector('.msgErrorSenha')
    
    if(nome==""){
        inputnome.classList.add('invalid')
        errorNome.classList.add('invalid')
        msgErrorNome.innerHTML="Campo Vazio"
    }else{
        inputnome.classList.remove('invalid')
        errorNome.classList.remove('invalid')
    } 
    if(senha ==""){
        inputsenha.classList.add('invalid')
        errorSenha.classList.add('invalid')
        msgErrorSenha.innerHTML="Campo Vazio"
    }else{
        inputsenha.classList.remove('invalid')
        errorSenha.classList.remove('invalid')
    }
}


submit.addEventListener('click', event => {
    const nome = document.getElementById('nome').value
    const senha = document.getElementById('senha').value
    validation(nome,senha)
    event.preventDefault()
})