//function greet(name:any) {
function greet(name: string, age?: number) {  // o ? apos o parametro age o define como parametro opcional
  console.log(`Hello, ${name.toUpperCase()} !`)
}

greet('Daniel', 23)
// Nao funciona para os tipos abaixo porque para number e boolean 
//  não existe a função toUpperCase de strings
// greet(0)
//greet(true)

