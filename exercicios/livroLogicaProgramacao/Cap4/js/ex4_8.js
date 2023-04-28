

function repetir() { 

    var fruta = document.getElementById('fruta').value
    var inNumber = document.getElementById('inNumber').value
    var outResposta = document.getElementById('outResposta')

    var number = Number(inNumber)

    var resposta = ''

    if ( number == 0 || fruta == '') { 
        alert('Por favor preencha todos os campos')
        return
    }

    for (var i = 2; i <=number; i++) {

        resposta = `${resposta + fruta} * `
    }

    resposta = `${resposta + fruta} . `

    outResposta.innerHTML = resposta



}


var btRepetir = document.getElementById('btRepetir')
btRepetir.addEventListener('click', repetir)