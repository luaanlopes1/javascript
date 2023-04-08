//  Vamos construir um exemplo de uso das condições e operadores relacionais. A página exibida na Figura 3.2 faz a leitura do nome e das notas de um aluno, apresenta a média e uma mensagem para o aluno: “Parabéns ... Você foi aprovado(a)!” ou, então, “Ops... Você foi reprovado(a).”. A situação de aprovado ou reprovado é deÓnida pela média das notas, que deve ser 7.0 ou superior para aprovação. Caso a nota seja inferior a 7.0, a mensagem indicando a reprovação deve ser exibida.



function calcular () { 

    // Abaixo Declarando os ids do HTML

    var inName = document.getElementById('inName').value
    var inFirst = document.getElementById('inFirst').value
    var inSecond = document.getElementById('inSecond').value
    var outMedia = document.getElementById('outMedia')
    var outNoticia = document.getElementById('outNoticia')

    // Abaixo Criando a media das notas
    var media = (Number(inFirst) + Number(inSecond)) / 2
    

    // Abaixo Declarar a media do aluno na tela

    outMedia.innerHTML = `Média das notas: ${(media.toFixed(1))}`

    // Abaixo Declarar se o aluno passou com IF

    if (media >=7) {

    outNoticia.innerHTML = `Parabéns ${inName}! Você foi aprovado(a)!!`
    outNoticia.style.color = 'blue'


    } else if (media >=4) {
    outNoticia.innerHTML = `Olá ${inName}! Você está de recuperação, estude para passar, boa sorte!`
    outNoticia.style.color = 'gray'

    }
    
    
    else { 
    outNoticia.innerHTML = `Ops ${inName}! Infelizmente você foi reprovado(a)!`  
    outNoticia.style.color = 'red'
        
    }


}

    var btMedia = document.getElementById('btMedia')
    btMedia.addEventListener('click', calcular)