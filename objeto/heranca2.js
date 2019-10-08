// Cadeia de protótipos (prototype chain)
const avo = {
    atributo1: 'A'
}
const pai = {
    __proto__:avo,
    atributo2: 'B'
}
const filho = {
    __proto__:pai,
    atributo3: 'C'
}

console.log(filho.atributo1, filho.atributo2, filho.atributo3)

const Carro = {
    velAtual: 0,
    velMax: 200,
    aceleraMais(delta){
        if(this.velAtual + delta <=this.velMax){
            this.velAtual += delta
        }else{
            this.velAtual = this.velMax
        }
    },
    status(){
        return `${this.velAtual}km/h de ${this.velMax}km/h`
    }
}

const Ferrari = {
    __proto__:Carro,
    modelo: 'F40',
    velMax: 324 //shadowing (Vai ter preferência sobre o atributo da classe pai)
}

const Volvo = {
    modelo: 'V40',
    status(){
        return `${this.modelo}: ${super.status()}`
    }
}

Object.setPrototypeOf(Ferrari, Carro)
Object.setPrototypeOf(Volvo, Carro)

console.log(Ferrari)
console.log(Volvo)

Volvo.aceleraMais(100)
console.log(Volvo.status())

Ferrari.aceleraMais(300)
console.log(Ferrari.status())