var person = {
  age: 17,
  name: 'Lucas'
}

// Funcao pura (Recebe dados e retorna alguma informacao e nao gera efeitos colaterais)
function getRemainingYearsToMajority(person) {
  return 18 - person.age
}


// Funcao impura (gera efeitos colaterais)
function increasePersonAge(person) {
  person.age = person.age + 1
}


// Chama um metodo impuro
increasePersonAge(person)

var remainingYears = getRemainingYearsToMajority(person)

console.log(remainingYears)
