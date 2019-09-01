console.log(7/0.0000001)//Quanto mais próximo de 0, maior é o número retornado
console.log(7/0)//Retorna um valor infinito
console.log("10"/2)
/*
Por se tratar de uma linguagem de tipagem fraca, o JavaScript verifica se 
os caracteres contidos dentro de uma string podem ser convertidos em números
para realizar a operação, em contra partida, se usado o operador '+' a string 
tem preferência, ao invez de somar, o JavaScript irá concaternar, como no 
exemplo abaixo
*/
console.log('3'+ 2)

console.log("Show!" * 2) //Esta string n pode ser convertida, não é retornado valor
console.log(0.1+0.7) 
/* em JavaScript, existe uma especificação (IEEE) de números que vai gerar, em 
alguns momentos imprecisões com operações em ponto flutuante
*/