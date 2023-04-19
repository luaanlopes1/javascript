


function calcular () { 


    var hora = document.getElementById('hora').value
    // var data = new Date();
    var hourFrance = document.getElementById('hourFrance')

    var somar = (Number(hora) + 5)


    if (somar > 24)

    hourFrance.innerHTML = `Agora são ${somar} na frança`






}

var calcularHora = document.getElementById('calcularHora')
calcularHora.addEventListener('click', calcular)

