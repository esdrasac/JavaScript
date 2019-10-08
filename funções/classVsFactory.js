class Pessoa{
    constructor(nome){
        this.nome = nome
    }

    falar(){
        console.log(`Meu nome é ${this.nome}`)
    }
}

let mynome = new Pessoa('Esdras')

mynome.falar()

const criarPessoa = nome => {
    return{
        falar: () => console.log(`Meu nome é ${nome}`)
    }
}

const mynome2 = criarPessoa('João')
mynome2.falar()