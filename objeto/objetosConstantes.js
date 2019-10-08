//pessoa => 123 => {...}
const pessoa = {nome: 'João'}
pessoa.nome = 'Pedro'

// O objeto pessoa, aponta para um endereço de memória
// ao declarar como constante, vc não consegue alterar o endereço ao 
// qual ele aponta, porem é possivel mudar o valor desse endereço


Object.freeze(pessoa)
// A função freeze, impede que vc altere qualquer coisa dentro do objeto
// sendo o endereço para qual o objeto aponta, como tbm o valor do endereço