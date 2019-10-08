const fabricantes = ['Mercedez', 'Audi', 'BMW']

function Imprimir(nome, indice){
    console.log(`${indice + 1}. ${nome}`)
}

fabricantes.forEach(Imprimir) //CallBack
fabricantes.forEach(function(a){
    console.log(a)
})