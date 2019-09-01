{ 
    {
        {
            var sera = 'Será???'  
            console.log(sera)
        } 
    } 
}

console.log(sera) //Variáveis 'var' são visiveis fora do escopo

function teste(){
    var local = 123
    console.log(local)
}

teste()
//  console.log(local)  >> dessa maneira eu não consigo acessar a variavel declarada 'var'
