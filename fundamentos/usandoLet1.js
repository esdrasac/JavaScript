let  numero = 1 //Variáveis 'let' não igonoram o escopo
{
    let numero = 2
    console.log('Dentro = ', numero)// retorna o valor 2
}
console.log('Fora = ', numero) // retorna o valor 1  