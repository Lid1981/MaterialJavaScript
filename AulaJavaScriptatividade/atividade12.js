//uma função que recebe os dias e os kms rodados
//o valor por dia é 250
//valor por km é 0.50
//se tiver rodado mais de 1000km, o valor por km fica 0.25

function calcularAluguel(dias,kms){
    const valorPorDia = 250;
    
    if (kms > 1000){
        const valorPorKm = 0.25;
        const calculoDiaria = dias * valorPorDia
        const valorKm = kms * valorPorKm
       
        const total = calculoDiaria + valorKm
        console.log(total)
    } else {
        const valorPorKm = 0.50;
        const calculoDiaria = dias * valorPorDia
        const valorKm = kms * valorPorKm
        
        const total = calculoDiaria + valorKm
        console.log(total)
    }
}

calcularAluguel(15, 850)
calcularAluguel(10, 400)