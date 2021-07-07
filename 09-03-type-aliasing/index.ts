
// Definindo um tipo :
// Cria-se um alias para um tipo definido
type Cpf = string

// Definindo uma constante como sendo do tipo definido acima
const cpf:Cpf = '123'

//combinando/permitindo mais tipos em um alias
type Cnpj = string | number

// Definindo constantes como sendo do tipo definido acima
const cnpj1:Cnpj = "01.234.567/0001-00"
const cnpj2:Cnpj = 1234567000100

// Definindo um tipo e usando como uma especie de enum
type Sex = 'male' | 'female' | undefined

// pressionar CTRL + ESPACE de pois do sinalde = para listar as opções (male e female na auto lista do editor)
const sex:Sex = undefined

