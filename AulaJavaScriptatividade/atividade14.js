//Função que receba um objeto de um carro
//O objeto contem as propriedades: modelo, ano, cor e km
//Se o carro for maior que 2020 ou tiver menos que 1000km, exibir: Carro novo!
//Se não, exibir: Carro usado!

const carro = {
    modelo: "Civic",
    ano: 2021,
    cor: "preto",
    km: 800
}

function verificarCarro(carro){
    if(user.ano > 2020 || user.km < 1000){
        console.log("Carro novo!")
    } else{
        console.log("Carro usado!")
    }
}

verificarCarro(carro)