

    


function calcular () { 

    var name = document.getElementById('name').value
    var masculino = document.getElementById('masculino').checked
    var feminino = document.getElementById('feminino').checked
    var altura = document.getElementById('altura').value
    var text = document.getElementById('text')
    var calcularPesoHomem = (22 * (Math.pow(altura,2))).toFixed(2)
    var calcularPesoMulher = (21 * (Math.pow(altura,2))).toFixed(2)
    
    if (name == '' || (masculino == false && feminino == false)) {
        alert ('Por favor, informe o nome e selecione o sexo!')
        document.getElementById('name').focus()
        return
        
    }   

    if (altura == 0) { 
        alert('Por favor, informe a altura!')
        document.getElementById('altura').focus()
        return
    }

    if (masculino) { 
        text.innerHTML = `${name}: Seu peso ideal é: ${calcularPesoHomem} Kg.`
    } else {
        text.innerHTML = `${name}: Seu peso ideal é: ${calcularPesoMulher} Kg.`
    }
}

    var calcularPeso = document.getElementById('calcularPeso')
    calcularPeso.addEventListener('click', calcular)

    function limpar () {

    var name = document.getElementById('name').value=''
    var masculino = document.getElementById('masculino').checked = false
    var feminino = document.getElementById('feminino').checked = false
    var altura = document.getElementById('altura').value=''
    var text = document.getElementById('text')

    text.innerHTML = ``

    document.getElementById('name').focus()
    


    }

    var limparCampos = document.getElementById('limparCampos')
    limparCampos.addEventListener('click', limpar)