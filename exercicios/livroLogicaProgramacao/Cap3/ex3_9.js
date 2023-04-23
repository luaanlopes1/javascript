





function calcular () { 

    var inValor = document.getElementById('inValor').value
    

    var outTime = document.getElementById('outTime')
    var outTroco = document.getElementById('outTroco')

    

    outTime.innerHTML = ``
    outTroco.innerHTML = ``

    var trintaMin = 1
    var sessentaMin = 1.75
    var centoVinteMin = 3



    if (inValor == '' || inValor < 1) { 

        alert (`Valor Insuficiente, adicione moedas`)
        return
    }

    
    if (inValor >= trintaMin && inValor < sessentaMin) { 

        outTime.innerHTML = `Tempo: 30 min`
        outTroco.innerHTML = `Troco R$: ${(inValor - trintaMin).toFixed(2)}`
    }


    if (inValor >= sessentaMin && inValor < centoVinteMin) {

        outTime.innerHTML = `Tempo: 60 min`
        outTroco.innerHTML = `Troco R$: ${(inValor - sessentaMin).toFixed(2)}`
    }



    if (inValor >= centoVinteMin) { 

        outTime.innerHTML = `Tempo: 120 min`
        outTroco.innerHTML = `Troco R$: ${(inValor - centoVinteMin).toFixed(2)}`
    }

   
}

var btDeposito = document.getElementById('btDeposito')
btDeposito.addEventListener('click', calcular)
    


