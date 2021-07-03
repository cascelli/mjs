// Lista de strings
var list = ['Daniel', 'Rafaela', 'Caio']

console.log('--> Lista de strings :')
console.log(list)

// Objetos
var person1 = {
  name: 'Daniel',
  age: 22
}

var person2 = {
  name: 'Rafaela',
  age: 32
}

var person3 = {
  name: 'Caio',
  age: 36
}



list = [person1, person2, person3]

console.log('\n--> Lista de objetos strings :')
console.log(list)


console.log('\n--> Lista a propriedade "name" do elemento de indice 0 do array :')
console.log(
  list[0].name // lista a propriedade name do objeto de indice 0 do array "list" (person1)
) 

console.log('\n--> Lista o objeto inteiro de indice 0 do array :')
console.log(
  list[0] // lista o objeto de indice 0 do array "list" (person1)
) 


// Iterando sobre os elementos de um array
console.log('\n--> Itera sobre os elementos de um array com o laço "for" :')
for (var person of list) { // Itera em cada indice do array list e o associa a variavel person
  console.log(person) // imprime o conteudo da variavel person
}


// Iterando sobre os elementos de cada objeto de um array
console.log('\n--> Itera sobre os elementos de cada objeto de um array com o laço "for" :')
for (var person of list) { // Itera em cada indice do array list e o associa a variavel person
  console.log(person.name) // imprime o conteudo da variavel person.name
}
