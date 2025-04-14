//Crie uma função que pegue a idade, genero e cidade de um usuário 
//Se o usuário for do sexo masculino e tiver mais de 18 anos, exibir Precisa se alistar!
//Se o usuário for do sexo masculino e tiver menos de 18 anos, exibir Não pode se alistar!

const user = {
    nome: "Samuel",
    idade: 24,
    genero: "masculino",
    cidade: "Fortaleza"
}

function verificarAlistamento(user){
    if(user.idade >= 18 && user.genero == "masculino"){
        console.log("Precisa se alistar!")
    } else {
        console.log("Não precisa se alistar!")
    }
}

verificarAlistamento(user)