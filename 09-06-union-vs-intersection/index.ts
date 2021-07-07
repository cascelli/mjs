type Cpf = string | number

function findPerson(cpf:Cpf) {

  // Atencao para o uso do "typeof" :
  if (typeof cpf === 'string') { // typeof determina se o parametro passado é string
    return cpf.toUpperCase() // o intellisense mostra os metodos disponiveis para string ao editar porque sabe que se trata de um parametro do tipo string
  }  
  return cpf.toString() // o intellisense mostra os metodos disponiveis para number ao editar porque pela logica do código só pode ser um parametro do tipo number

}


// Uso da alternativa de intersection "&" ao invés do uso da keyword "typeof"

type Animal = { sex: 'male' | 'female' }
type Human = { hungry : boolean }

// Person seria um tipo que teria tanto os tipos Animal quanto os tipos Human
type Person = Animal & Human  // O Operador "&" faria o papel de unir os dois tipos especificados anteriormente no tipo Person

function getPersonStatus( person: Person) {
  return person.hungry
}

