





function calcular () { 

    var number = document.getElementById('number').value
    var outResposta = document.getElementById('outResposta')

    var impar = number / number

   


    if ( number % 2 == 0) { 

        outResposta.innerHTML = `Resposta: ${number} é Par `
        
        
    } else { 

        outResposta.innerHTML = `Resposta: ${number} é Ímpar `
        
        

    }




}

var btCalcular = document.getElementById('btCalcular')
btCalcular.addEventListener('click', calcular)