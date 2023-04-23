




function calcular () { 

    
    var inNumber = document.getElementById('inNumber').value
    var outTabuada = document.getElementById('outTabuada')

    var number = Number(inNumber)

    if (inNumber == '') { 

        alert(`Por favor informe um número válido...`)
        return
    }

    // cria uma variável do tipo String, que irá concatenar a resposta
    
    var resposta = "";

    for (var i = 1; i <= 10; i++) {

        // a variável 'resposta' vai acumulando os novos conteúdos

        resposta = resposta + number + " x " + i + " = " + number * i + "\n"
    }

    // o conteúdo da tag pre é alterado para exibir a tabuada 

    outTabuada.textContent = resposta;

    

    


}

    var btMostrar = document.getElementById('btMostrar')
    btMostrar.addEventListener('click', calcular)