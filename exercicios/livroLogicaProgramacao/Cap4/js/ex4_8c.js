

function verificar () { 

    var inNumber = document.getElementById('inNumber').value
    var number = Number(inNumber)
    
    var outResposta = document.getElementById('outResposta')

    var resposta = ''

    var divisores = `Divisores do ${number}: 1`
    var soma = 1
    

    for (var i = 2; i < number; i++) { 

        if (number % i == 0) { 
            divisores = `${divisores}, ${i}`
            soma = soma + i
        }
    }

    divisores = `${divisores}. (soma: ${soma})`

    outResposta.innerHTML = divisores

    if (number == soma) { 
        outResposta.innerHTML = `${divisores}. Logo, É um número Perfeito`
    } else { 
        outResposta.innerHTML = `${divisores}. Logo, não é um número perfeito.`
    }


}

    var btVerificar = document.getElementById('btVerificar')
    btVerificar.addEventListener('click', verificar)