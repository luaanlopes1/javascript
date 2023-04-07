// Elaborar um programa para uma revenda de veículos. O programa deve ler modelo e preço do veículo. Apresentar como resposta o valor da entrada (50%) e o saldo em 12x. A Figura 2.9 ilustra uma execução desse programa.



function calcular ()
{

    var inCar = document.getElementById('inCar').value
    var inPrice = document.getElementById('inPrice').value

    var entrada = inPrice / 2
    var saldo = (inPrice / 2) / 12

    
    

    document.getElementById('inEntrada').innerHTML = `Nossa proposta para o veículo ${inCar} seria uma entrada de R$${entrada.toFixed(2)} e o restante em 12x de R$${saldo.toFixed(2)}.`




}

var btCalcular = document.getElementById('btCalcular')
btCalcular.addEventListener('click', calcular)