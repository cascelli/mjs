// OBS : DICA
// Criando um arquivo de nome index.js na pasta do projeto, 
// nao é precisa especificar no terminal : 
//   node .\02-06-condicionais\scripts.js
// Basta especificar o diretorio que o NodeJS busca o arquivo
//  parao "index.js" para ser executado automaticamente
console.log('batata')

var me = {
  name: 'Daniel',
  age: 18
}

function checkAge(person) {
  console.log('A idade da pessoa é : ' + person.age)

  if(person.age >= 18) {
    console.log('A pessoa é maior de idade')
  }
  else {
    console.log('A pessoa é menor de idade')
  }

  console.log('log normal independente de condicao')
}

var me = {
  name: 'Daniel',
  age: 18
}

function checkAge2(person) {
  console.log('A idade da pessoa é : ' + person.age)

  if(person.age == 18) { // dois sinais de == comparam o valor da variavel e nao o tipo delas
                         // tres sinais de igual comparam o valor e o tipo das variaveis
    console.log('Caiu dentro do bloco')
  }
}

checkAge(me)

checkAge(me)

