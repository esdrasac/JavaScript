let isativo = false
console.log(isativo)

isativo = true
console.log(isativo)

isativo = 1
console.log(!!isativo)

console.log('Os verdadeiros...')
console.log(!!3)
console.log(!!-1)
console.log(!!' ')
console.log(!!'texto')
console.log(!![])
console.log(!!{})
console.log(!!Infinity)
console.log(!!(isativo = true))

console.log('Os falsos...')
console.log(!!0)
console.log(!!'')
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isativo = false))

console.log('Pra finalizar...\n')
console.log(!!('' || null || 0 || ' '))//Retorna True ou False
console.log(('' || null || 0 || '123'))//Retorna o primeiro valor verdadeiro

let nome = ''
console.log(nome || 'Desconhecido')