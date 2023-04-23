


function calcular () { 


    var inNumber = document.getElementById('inNumber').value
    var outResposta = document.getElementById('outResposta')

    var number = Number(inNumber)

    // Cria uma variável resposta

    var resposta = `Entre ${number} e 1: `

    // Cria um for decrescente

    for (var i = number; i > 0; i--) { 
        // resposta vai acumulando números e virgulas

        resposta = (resposta + i) + ", ";
    }

        // Em JavaScript, a variável i declarada no for é uma variável local que existe na função. Após o término do laço, ela mantém o valor do último incremento/decremento da repetição. Portanto, ao referenciar o i fora do laço, o conteúdo “1” + “.” é acrescentado à resposta.

        resposta = resposta + i + "."

    outResposta.textContent = resposta;
    

}

    var btMostrar = document.getElementById('btMostrar')
    btMostrar.addEventListener('click', calcular)