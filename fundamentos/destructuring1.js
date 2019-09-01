    const pessoa = {
        nome: 'Ana',
        idade: 5,
        endereco:{
            logradouro: 'Rua Abc',
            numero: 129
        }
    }

    const{nome, idade} = pessoa     //retira os itens especificos do objeto
    console.log(nome, idade)

    const{nome: n, idade: i} = pessoa
    console.log(n, i)

