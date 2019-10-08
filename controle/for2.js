const notas = [6.5,6.7,8.2,9.4,5.4,7.6]
for(let i in notas){
    console.log(i,notas[i])
}

const pessoa = {
    nome: 'Ana',
    sobrenome: 'Silva',
    idade: 20,
    peso: 45
}

for(let i in pessoa){
    console.log(`${i}: ${pessoa[i]}`)
}