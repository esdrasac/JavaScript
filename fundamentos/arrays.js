/*
    Por se tratar de uma liguagem de tipagem fraca, é possível se trabalhar
    com arrays de maneira mais flexivel, não sendo necessário a declaração
    do tamanho do array, muito menos o seu tipo, possibilitando que vc
    ultilize tipos diferentes, dentro do mesmo array
*/

const valores = [6.5,9.4,4.7,2.3]
console.log(valores[0], valores[3])
console.log(valores[4])

valores[4] = 10
console.log(valores)
console.log(valores.length)

valores.push({id: 3}, false, null, 'teste')//Adiciona valores ao array
console.log(valores)

console.log(valores.pop())// retira o ultimo valor do array e retorna na tela
delete valores[0] 
console.log(valores)

console.log(typeof valores)