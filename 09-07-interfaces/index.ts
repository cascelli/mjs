// type person = {
//   name: string,
//   age: number
// }

interface Animal {
  sex: 'male' | 'female'
}

interface Person extends Animal { // Estendendo Person de Animal (usar a palavra extends)
  name: string,
  age: number
}

// Obs : 
// Não pode haver um type e uma interface de mesmo nome.
// Porém, posso ter mais de uma interface com o mesmo nome
// Ao final, a interface sera a soma das declaracoes de cada uma
// *** Evitar esta prática ***

interface Person {  // Mesmo nome da intrface anterior
  weight: number
}


// Declarando a constante final com tudo

const person: Person = { // Somou as declaracoes das interfaces "Person" anteriores
  age: 22,
  name: 'Daniel',
  weight: 65,
  sex: 'male'
}


