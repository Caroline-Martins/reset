/*O saldo da sua conta é R$ 1000,00
Você decide comprar uma calça por R$ 99,90
Você recebe o seu salário de R$ 2500,00
Você está caminhando na rua e decide dar R$ 0,10 para um morador de rua
Você compra um ar condicionado cujo valor é 25% do seu saldo atual
Você decide antecipar o pagamento de uma dívida usando metade do seu saldo
Qual o valor do seu saldo?*/

saldoAtual = 1000.00
calca = 99.90 
salario =  2500.00 
moradorDeRua = 0.10  
console.log("Saldo inicio: " + saldoAtual)
saldoAtual = saldoAtual-calca
console.log("Saldo depois da compra da calça: " + saldoAtual)
saldoAtual = saldoAtual+salario
console.log("Saldo depois do salário: " + saldoAtual)
saldoAtual = saldoAtual-moradorDeRua
console.log("Saldo depois  da doação para o morador de rua: " + saldoAtual)
arCondicionado = saldoAtual* 0.25
saldoAtual = saldoAtual - arCondicionado
console.log("Saldo depois da compra do ar condicionado: " + saldoAtual)
saldoAtual = saldoAtual / 2
console.log("Saldo depois da antecipação do pagamendo: " + saldoAtual)
console.log("Saldo atual: " + saldoAtual)

