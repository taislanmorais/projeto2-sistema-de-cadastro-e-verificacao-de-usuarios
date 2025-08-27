// Criação de cadastro
let nome = prompt("Digite seu nome")
let idade =  parseInt(prompt("Digite sua idade"))

 //confirmar idade do usuário
if  (idade < 13) {
alert("Cadastro invalido, idade insuficiente.")
}
else if (idade >= 13) {
let senha = prompt("Digite sua senha")
 
alert("Cadastro realizado com susesso!")

//login 

let nomeConfirmado = prompt("Digite seu nome novamente.")
let senhaConfirmado = prompt("Digite sua senha novamente")

if (nomeConfirmado === nome && senhaConfirmado === senha) {
alert(`Login realizado com sucesso! Bem-vindo ${nome}`)
}else{
    alert("Nome ou senha incorretos. Tente novamente.")
}
}

