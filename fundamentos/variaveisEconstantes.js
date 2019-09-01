//Para declarar uma variável 
var a = 5
console.log(a)

/* 
Em JavaScript, se aborda tipagem dinâmica
permitindo que eu atribua diretamente uma variável que 
contem um numero inteiro, com uma string, sem precisar 
declar nada, além de uma simples atribuição como abaixo
*/
var a = "Teste" //Com variaveis declaradas 'var' é possível redeclara-las
console.log(a)


let b = 4 
b = 5 //Com variaveis declaradas 'let' não é possível redeclara-las
console.log(b)

const c = 5 //Com variáveis declaradas 'const' é impossível alterar seus valores posteiormente
console.log(c)