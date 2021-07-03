function greet(name = 'mergulhador') { // Passando um parametro (name) e definindo o seu valor padrao como "mergulhador"
  console.log('Boa madrugada, ' + name)
}

greet('Daniel')
greet('Rafaela')
greet('Diogo')
greet() // sem passar paramertro, assume o valor padrao

console.log('\n--> Chamando Funcao que nao retorna nada :')
console.log(greet())

// Funcao retornando alguma coisa
function greet2(name = 'mergulhador') { // Passando um parametro (name) e definindo o seu valor padrao como "mergulhador"
  return'Boa madrugada, ' + name
}

console.log('\n--> Chamando Funcao que retorna algo :')
console.log(greet2())

var greeting = greet2('Daniel')

console.log('\n--> Retornando o conteudo de uma variavel :')
console.log(greeting)
