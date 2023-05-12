

function resultado () { 

    var inChinchilas = document.getElementById('inChinchilas').value
    var inAnos = document.getElementById('inAnos').value
    var chinchilas = Number(inChinchilas)
    var anos = Number(inAnos)
    var outResposta = document.getElementById('outResposta')

    var total = chinchilas
    var resultado = ''
    
    

    if (chinchilas <2 || anos == 0) { 
        alert('Por favor, a criação de Chincilas tem que no minimo maior ou igual 2 e anos maior ou igual a 1. ')
        return
    }

    for (var i = 1; i <= anos; i++) { 

        resultado = `${resultado + i}º Ano: ${total} Chinchilas.\n`
        total = total * 3


    }

    outResposta.innerHTML = resultado



}

var btResposta = document.getElementById('btResposta')
btResposta.addEventListener('click', resultado)