//Função é um bloco de código que possibilita o reaproveitamento de código
//Função sem retorno

function imprimirSoma(a,b){
    console.log(a+b)
}
imprimirSoma(2,5)
imprimirSoma(2)//Retorna "Not a Number"(NaN)
imprimirSoma(2,15,7,3,4)//Soma os dois primeiros números e ignora o restante
imprimirSoma()//Retorna "Not a Number"(NaN)

//Função com retorno

function soma(a, b = 0){//Se não for passado nenhum parametro para "b", por padrão está definido "0"
    return a + b
}

console.log(soma(3,4))
console.log(soma(3))