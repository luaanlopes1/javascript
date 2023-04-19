

    


function calcular () { 

    var name = document.getElementById('name').value
    var masculino = document.getElementById('masculino').checked
    var feminino = document.getElementById('feminino').checked
    var altura = document.getElementById('altura').value
    var text = document.getElementById('text')
    var calcularPesoHomem = (22 * (Math.pow(altura,2))).toFixed(2)
    var calcularPesoMulher = (21 * (Math.pow(altura,2))).toFixed(2)
    
    // Primeira saber se colocou não deixou informações sem preencher.

    


    

    if (name == '' || (masculino == false && feminino == false) || altura == 0) {
        alert ('Por favor, preencher todos os campos vazios. ')
        document.getElementById('name').focus()
        return
        
    }

    

    

    


    // Condição de altura inferior a 3 metros

    if (altura > 3 ) {
        alert (`Por favor digite sua altura REAL. Não existe alguém com ${altura} metros de altura. Utilize ponto (.) ou virgula (,) para separar as casas decimais. EX: 1,74`)
        document.getElementById('altura').focus()
        return
    }

    

    

    // Verificar o sexo

    if (masculino) { 
        text.innerHTML = `${name}: Seu peso ideal é: ${calcularPesoHomem} Kg.`
    } else {
        text.innerHTML = `${name}: Seu peso ideal é: ${calcularPesoMulher} Kg.`
    }
}


    // Abaixo linkando o botao com o JS e chamando a function com o click

    var calcularPeso = document.getElementById('calcularPeso')
    calcularPeso.addEventListener('click', calcular)

    // Criando a function para limpar os campos

    function limpar () {

    // Declarando as variaveis zeradas

    var name = document.getElementById('name').value=''
    var masculino = document.getElementById('masculino').checked = false
    var feminino = document.getElementById('feminino').checked = false
    var altura = document.getElementById('altura').value=''
    var text = document.getElementById('text')

    text.innerHTML = ``

    document.getElementById('name').focus()
    


    }

    // Abaixo linkando o botao com o JS e chamando a function com o click

    var limparCampos = document.getElementById('limparCampos')
    limparCampos.addEventListener('click', limpar)