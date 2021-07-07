// Tipando objeto

// Modo básico
const person:{ // Defino o tipo de cada propriedade do objeto
  name: string,
  age: number,
  contacts?: string[], // Defino esta propriedade como opcional acrescentando "?" na frente do seu nome"
  isAlive: boolean
} = { // Definindo  o objeto propriamente dito
  name: 'Daniel',
  age: 22,
  //contacts: []  // Array vazio também satisfaz o TypeScript, mesmo definindo contacts como array de string
  contacts: ['Daniel', 'Marcos'],
  isAlive: true
}



// usando type aliasing para facilitar a definicao de varios objetos do mesmo tipo :
type Person = {
  name: string,
  age: number,
  contacts?: string[],   // Definindo contacts como uma propriedade opcional
  isAlive: boolean
}

// Agora defino o objeto propriamente dito informando o seu type aliasing
const pessoa: Person = {
  name: 'Daniel',
  age: 22,
  //contacts: []  // Array vazio também satisfaz o TypeScript, mesmo definindo contacts como array de string
  contacts: ['Daniel', 'Marcos'],
  isAlive: true
}

// Defino outro objeto propriamente dito informando o seu type aliasing novamente
const pessoa2: Person = {
  name: 'Daniel',
  age: 22,
  //contacts: []  // Array vazio também satisfaz o TypeScript, mesmo definindo contacts como array de string
  //contacts: ['Daniel', 'Marcos'],  // Sem contacts pois fo definido como propriedade opcional no type Person
  isAlive: true
}
