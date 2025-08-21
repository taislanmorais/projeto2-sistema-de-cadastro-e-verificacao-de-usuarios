// Criação de cadastro
let nome = prompt("Digite seu nome")
let idade =  parseInt(prompt("Digite sua idade"))

 //confirmar idade do usuário
if  (idade < 13) {
alert("cadastro invalido, idade insuficiente.")
}
else if (idade >= 13) {
let senha = prompt("digite sua senha")
 
alert("login realizado com susesso!")
}

//login 

let nomeConfirmado = prompt("Digite seu nome novamente.")
let senhaConfirmado = prompt("Digite sua senha novamente")

