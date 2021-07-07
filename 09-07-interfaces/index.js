"use strict";
// Tipando objeto
// Modo básico
const person = {
    name: 'Daniel',
    age: 22,
    //contacts: []  // Array vazio também satisfaz o TypeScript, mesmo definindo contacts como array de string
    contacts: ['Daniel', 'Marcos'],
    isAlive: true
};
// Agora defino o objeto propriamente dito informando o seu type aliasing
const pessoa = {
    name: 'Daniel',
    age: 22,
    //contacts: []  // Array vazio também satisfaz o TypeScript, mesmo definindo contacts como array de string
    contacts: ['Daniel', 'Marcos'],
    isAlive: true
};
// Defino outro objeto propriamente dito informando o seu type aliasing novamente
const pessoa2 = {
    name: 'Daniel',
    age: 22,
    //contacts: []  // Array vazio também satisfaz o TypeScript, mesmo definindo contacts como array de string
    //contacts: ['Daniel', 'Marcos'],  // Sem contacts pois fo definido como propriedade opcional no type Person
    isAlive: true
};
