//Lista de modelos de carros

const modelos = ["Fusca","Civic","Palio","Corollla"]

console.log(modelos [3])

//Adicionar um novo modelo no final da lista - push

modelos.push("Fiesta")

console.log(modelos)

//Contagem - length

console.log(modelos.length)

modelos.push("HB20")

console.log(modelos)

console.log(modelos.length)

//Remover o último modelo - pop

modelos.pop()
console.log(modelos)

console.log(modelos.length)

//Remover um modelo específico - splice

modelos.splice(1, 1)

console.log(modelos)


