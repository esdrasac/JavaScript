const Ferrari = {
    Modelo: 'F40',
    velMax: '324'
}

const Volvo = {
    Modelo: 'V40',
    velMax: '200'
}

console.log(Ferrari.__proto__)
console.log(Ferrari.__proto__ === Object.prototype)
console.log(Volvo.__proto__ === Object.prototype)
console.log(Ferrari.__proto__ === Volvo.__proto__)

function MeuObjeto(){

}

console.log(typeof Object, typeof MeuObjeto)