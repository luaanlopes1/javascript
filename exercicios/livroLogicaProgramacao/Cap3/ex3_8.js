

function calcular () { 

    var velocidadeCarro = document.getElementById('velocidadeCarro').value
    var velocidadePermitida = document.getElementById('velocidadePermitida').value

    var carro = Number(velocidadeCarro)
    var permitida = Number(velocidadePermitida)
    

    var vintePorCento = (permitida * 0.2) + permitida
   
    
    

    if (velocidadeCarro <= velocidadePermitida) { 

        outResposta.innerHTML = `Situação: Sem Multa.`
        
        
    }

    if ( velocidadeCarro > velocidadePermitida && velocidadeCarro < vintePorCento) { 

        outResposta.innerHTML = `Situação: Multa Leve.`
        console.log(vintePorCento)
    
    } 

    if ( velocidadeCarro > velocidadePermitida && velocidadeCarro > vintePorCento) { 
        outResposta.innerHTML = `Situação: Multa Grave.`
    }
    



}

    var btCalcular = document.getElementById('btCalcular')
    btCalcular.addEventListener('click', calcular)



