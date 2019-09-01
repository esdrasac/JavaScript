const escola = "N33C"
console.log(escola.charAt(3))//Retorna o valor de posição "3" na string
console.log(escola.charAt(5))//Retorna um valor vazio
console.log(escola.charCodeAt(4))//Retorna o valor do codigo UNICODE
console.log(escola.indexOf(3))//Retorna o indice em que o caractere foi encontrado
console.log(escola.substring(1))//Retorna a partir do indice indicado
console.log(escola.substring(0,3))//Retorna todos os valores do primeiro indice indicado até o segundo(sem incluí-lo)
console.log('Escola '.concat(escola).concat('!'))//Ou
console.log('Escola ' + escola + '!')
console.log(escola.replace(3,'E'))//Substitui o primeiro valor do indice indicado pelo segundo indice
console.log('Esdras de Aguilar da Cruz'.split(' '))