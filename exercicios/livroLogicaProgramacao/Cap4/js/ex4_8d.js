

function criar () { 

    var inNumber = document.getElementById('inNumber').value
    var outResposta = document.getElementById('outResposta')

    var linhas = Number(inNumber)

    var resposta = ''


    if (linhas == '') { 
        alert('Por favor digite algum número maior que zero.')
        return
    }
    

    for (var i = 0; i < linhas; i++) { 

        for (let linha = 0; linha <= i; linha++) {
            resposta = `${resposta}*`
        }

        resposta = `${resposta}\n`

    }

    outResposta.innerHTML = resposta

}

var btCriar = document.getElementById('btCriar')
btCriar.addEventListener('click', criar)