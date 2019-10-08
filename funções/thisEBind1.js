const pessoa = {
    saudacao: 'Bom dia',
    falar(){
        console.log(this.saudacao)
    }
}

pessoa.falar()

const falar = pessoa.falar
falar() //Conflito entre paradgmas

const falarDePessoas = pessoa.falar.bind(pessoa) //"this" referencia o parâmetro de bind
falarDePessoas()