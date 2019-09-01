const nome = 'Rebeca'
const concatenacao = 'Olá ' + nome + '!' //Concatenação
console.log(concatenacao)
const template = `
    Olá
    ${nome}!
`                               
/*
Dentro do template, o JavaScript considera, os tabs, e as quebras de linhas
*/
console.log(template)

//É possivel trabalhar com expressões dentro dos templates
console.log(`1 + 1 = ${1 + 1}`)

const up = Texto => Texto.toUpperCase()
console.log(`Ei... ${up('Cuidado')}`)