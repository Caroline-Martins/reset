nomeCompleto= "Caroline Cardoso Martins"
apelido= "Carol"
idade= 25
dataNascimento= "24/11/1995"
localNascimento= "Porto Alegre"
altura= 1.65
trabalhando= false


apresentacao = "Meu nome é " + nomeCompleto + " (sou conhecida como " + apelido + ") e tenho " + idade + 
" anos. Nasci no dia " + dataNascimento + ", na cidade de " + localNascimento + 
". Tenho " + altura + "m de altura e atualmente estou " + (trabalhando ? "empregada" : "desempregada") + "."

console.log(apresentacao)