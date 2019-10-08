function GetPreco(imposto = 0, moeda = 'R$'){
    return `${moeda} ${this.preco * (1 - this.desc) * (1 + imposto)}`
}

const produto = {
    nome: 'Notebook',
    preco: 2499,
    desc: 0.1,
    GetPreco
}

global.preco = 20
global.desc = 0.1
console.log(GetPreco())
console.log(produto.GetPreco())

const carro = {preco: 49990, desc: 0.20}

console.log(GetPreco.call(carro))
console.log(GetPreco.apply(carro))

console.log(GetPreco.call(carro, 0.17,'$'))
console.log(GetPreco.apply(global, [0.17,'$']))