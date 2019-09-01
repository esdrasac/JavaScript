let valor //Variável não inicializada
console.log(valor)//Retorna um valor "Undefined" (pois não foi inicializada)

let valor2 = null// Váriavel inicializada, mas com ausencia de valor(não aponta para nenhum endereço de memória)



const produto = {}
console.log(produto.preco)
console.log(produto)
produto.preco = 3.50
console.log(produto)

produto.preco = undefined //Evitar atribuir undefined(deixa que a linguagem atribua quando necessario)
console.log(produto.preco)
//delete produto.preco
console.log(produto)

produto.preco = null//Sem preço
console.log(!!produto.preco)
console.log(produto)