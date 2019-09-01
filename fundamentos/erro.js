function tratarErro(){
    throw 'Deu ruim'
    
}
function imprimirNome(obj){
    console.log(obj.name.toUpperCase() + '!!!')
}

const obj =  {nome: 'Roberto'}

try {
    imprimirNome(obj)
} catch (e) {
    tratarErro(e)
} finally{
    console.log('Finalmente')
}