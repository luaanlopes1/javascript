


function preencherEtrelas () { 

    var inNumero = document.getElementById('inNumero').value
    var outEspacos = document.getElementById('outEspacos')

    var num = Number(inNumero)

    if (num == 0) { 
        alert('Número Inválido...')
        return

    }

    var estrelas = '' // Declara variavel que ira concatenar as estrelas/traços

    // cria um laço de repeticao de 1 até o numero informado

    for (var i = 1; i <= num; i++) { 
        if ( i % 2 == 1) { 
            estrelas = `${estrelas} * ` //na posicao impar do i: *
        } else { 
            estrelas = `${estrelas} -` //na posicao par: -
        }
    }

    outEspacos.innerHTML = estrelas //exibe as estrelas
}

var btPreencher = document.getElementById('btPreencher')
btPreencher.addEventListener('click', preencherEtrelas)