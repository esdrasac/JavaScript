function Pessoa(nome){
        this.nome = nome
    this.falar = function(){
        console.log(`Meu nome é ${this.nome}`)
    }
}

let mynome = new Pessoa('Esdras')

mynome.falar()