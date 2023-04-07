
// Cria referencia aos elementos da página.









function Converter () { 

    
    var inFilme = document.getElementById('inFilme').value
    var inMinutos = document.getElementById('inMinutos').value
    

    // Arredonda para baixo o resultado da divisão

    var horas = Math.floor(inMinutos / 60)

    // Obtém o resto da divisão entre os números

    var minutos = inMinutos % 60;

    document.getElementById('outFilme').innerHTML = 'O nome do Filme é: ' + inFilme

    document.getElementById('outMinutos').innerHTML = 'O tempo em horas e minutos é: ' + horas + ('Hora(s) e ' + minutos + 'minutos(s)')
    
  
}

var buConverter = document.getElementById('buConverter')
buConverter.addEventListener('click', Converter)
    




