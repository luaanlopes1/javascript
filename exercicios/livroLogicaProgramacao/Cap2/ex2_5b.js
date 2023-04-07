



function resultado () {

    var inPrice = document.getElementById('inPrice').value
    var inTime = document.getElementById('inTime').value

    var outPrice =  inTime / 15

    var resposta = Math.ceil(outPrice)

    var calculo = resposta*inPrice



    var outResultado = document.getElementById('outResultado').innerHTML = `Valor a pagar R$:${calculo.toFixed(2)}`


}

    var btShow = document.getElementById('btShow')
    btShow.addEventListener('click', resultado)