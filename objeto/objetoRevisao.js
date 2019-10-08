//Objeto => é uma coleção dinâmica de pares chave/valor
const produto = new Object
produto.nome = 'Cadeira'
produto['Marca do produto'] = 'Generica'
produto.preco = 220

console.log(produto)
delete produto.preco
console.log(produto)

//Objeto dentro do outro objeto
const Carro = {
    modelo: 'A4',
    valor: 89000,
    proprietario:{
        nome: 'Esdras',
        idade: 24,
        endereco:{
            logradouro:'Rua dezessete',
            numero: 129
        }
    },
    //Array de objetos
    condutores: [{
        nome: 'Junior',
        idade: 23
    },{
        nome: 'Ana',
        idade: '36'
    }],
    calculaValorSeguro: function(){
        //...
    }

}


console.log(Carro)

delete Carro.proprietario.endereco.numero

console.log(Carro)