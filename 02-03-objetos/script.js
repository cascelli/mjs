var person = {
  name: 'Daniel',
  age: 22,
  sex: 'male'
}

person.age = 21
person.age = 20 // A ultima atribuicao setada será a válida no objeto final 

console.log('--> Imprime o objeto completo :')
console.log(person) // Imprime o objeto completo
console.log('--> Imprime a propriedade "name" do objeto :')
console.log(person.name) // imprime a propriedade name do objeto
console.log('--> Imprime a propriedade "age" do objeto :')
console.log(person.age) // iprime a propriedade age do objeto
