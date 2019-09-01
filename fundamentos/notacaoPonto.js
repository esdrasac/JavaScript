console.log(Math.ceil(6.1))

const obj1 = {}
obj1.nome = 'Bola'
console.log(obj1.nome)

function Obj (nome){
    this.nome = nome
    console.log(nome)
}
meuNome="Esdras"
Obj(meuNome)

const obj2 = new Obj(" de Aguilar")
const obj3 = new Obj(" da Cruz")

console.log(meuNome + obj2.nome + obj3.nome)
