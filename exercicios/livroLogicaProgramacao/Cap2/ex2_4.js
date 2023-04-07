// Elaborar um programa para um restaurante que leia o preço por kg e o consumo (em gramas) de um cliente. Exiba o valor a ser pago, conforme





function Calcular() {


    // Primeiro associar os elementos do HTML para a função
    var inPrice = document.getElementById('inPrice').value
    var inGramas = document.getElementById('inGramas').value

    // Transfomar o preço do quilo para gramas

    var valor = (inPrice / 1000 ) * inGramas

    // Trocar o texto do campo resultado quando o botao for click
    
    document.getElementById('resultado').innerHTML = `Valor a ser pago R$: ${valor.toFixed(2)}`


}

var btCalcular = document.getElementById('btCalcular')
btCalcular.addEventListener('click', Calcular)
