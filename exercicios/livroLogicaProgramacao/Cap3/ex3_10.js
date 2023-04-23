

function calcular () { 

    var inLadoA = document.getElementById('inLadoA').value
    var inLadoB = document.getElementById('inLadoB').value
    var inLadoC = document.getElementById('inLadoC').value
    var outResposta = document.getElementById('outResposta')
    var outTipo = document.getElementById('outTipo')

    var LadoA = Number(inLadoA)
    var LadoB = Number(inLadoB)
    var LadoC = Number(inLadoC)

    var ab = LadoA + LadoB
    var ac = LadoA + LadoC
    var bc = LadoB + LadoC
    

    outResposta.innerHTML = ``
    outTipo.innerHTML = ``

    // Validar campos zerados

    if ( inLadoA == '' || inLadoB == '' || inLadoC == '') { 

       alert(`Por favor preencher todos os lados.`)
       return
    }

    // Validar se pode ser formado um triangulo.

    if ( LadoA > bc || LadoB > ac || LadoC > ab) { 

        alert(`Não pode ser formado um triangulo. Porquê um lado é maior do que a soma dos outros dois.`)
        return
    }


    // Vamos começar pelo triangulo Equilatero ( 3 lados iguais)

    if ( inLadoA == inLadoB && inLadoB == inLadoC ) { 

        outResposta.innerHTML = `Lados podem formar um triângulo com lados iguais.`
        outTipo.innerHTML = `Tipo: Equilátero`

        
    }

    // Vamos fazer o triangulo Escaleno ( 3 lados diferentes)

    if ( inLadoA != inLadoB && inLadoB != inLadoC) { 

        outResposta.innerHTML = `Lados podem formar um triângulo com lados diferentes`
        outTipo.innerHTML = `Tipo: Escaleno.`
    }

    // Vamos fazer triangulo Isósceles ( 2 lados iguais)

    if ( inLadoA == inLadoB != (inLadoA == inLadoC) || 
         inLadoB == inLadoC != (inLadoB == inLadoA) ||
         inLadoC == inLadoA != (inLadoC == inLadoB) 
         
        ) {

        outResposta.innerHTML = `Lados podem formar um triângulo com 2 lados iguais`
        outTipo.innerHTML = `Tipo: Isósceles`
        
    }


}

    // Chamar o botao no HTML e avisar que ao ser clicado chamar a function calcular


    var btVerificar = document.getElementById('btVerificar')
    btVerificar.addEventListener('click', calcular)

    // Criei um botão extra para limpar os campos se necessário.


    function limpar () { 

    var inLadoA = document.getElementById('inLadoA')
    var inLadoB = document.getElementById('inLadoB')
    var inLadoC = document.getElementById('inLadoC')
    var outResposta = document.getElementById('outResposta')
    var outTipo = document.getElementById('outTipo')

    inLadoA.value = ``
    inLadoB.value = ``
    inLadoC.value = ``
    outResposta.innerHTML = ``
    outTipo.innerHTML = ``

    }

    // Chamando o botao no HTML e avisar que ao ser clicado chamar o function limpar

    var btLimpar = document.getElementById('btLimpar')
    btLimpar.addEventListener('click', limpar)