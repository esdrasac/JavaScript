const pai ={
    nome: 'Pedro',
    corCabelo: 'Preto'
}
const filha1 = Object.create(pai)

filha1.nome = 'Ana'
filha1.corCabelo = 'Loiro'

const filha2 = Object.create(pai, {
    nome: {value: 'Bia', writable: false, enumerable: true}
})

console.log(filha2.nome)

for(let key in filha2){
    filha2.hasOwnProperty(key)?
        console.log(key): console.log(`Por herança: ${key}`)
}