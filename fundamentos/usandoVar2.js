var numero = 1 // 'var' ignora o escopo
{
    var numero = 2
    console.log('dentro =', numero) // retorna o valor 2
}
console.log('fora =', numero) // retorna o valor 2 