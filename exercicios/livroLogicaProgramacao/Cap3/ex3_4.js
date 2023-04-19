


function calcular () { 


    var hora = document.getElementById('hora').value
    // var data = new Date();
    var hourFrance = document.getElementById('hourFrance')

    var resultadoFranca = (Number(hora) + 5).toFixed(2)

    
    



    // Primeira condição não existir hora maior do que 24 horas

    if (hora >24.01) {

        alert (`Não existe este horário. Por favor coloque um número menor que 24 horas`)

        document.getElementById('hora').focus()

        hourFrance.innerHTML = ``

        return
    }

    
    // Se for maior do que 24 hrs voltar a contar de 00:00 horas

    if (resultadoFranca > 23.59) {

        hourFrance.innerHTML = `Agora são ${(resultadoFranca - 24).toFixed(2)} horas na frança`
        

    } else { 

        hourFrance.innerHTML = `Agora são ${resultadoFranca} horas na frança`
    }



}

var calcularHora = document.getElementById('calcularHora')
calcularHora.addEventListener('click', calcular)

