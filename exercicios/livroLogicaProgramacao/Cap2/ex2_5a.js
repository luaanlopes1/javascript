// Uma farmácia está com uma promoção – Na compra de duas unidades de um mesmo medicamento, o cliente recebe como desconto os centavos do valor total. Elaborar um programa que leia descrição e preço de um medicamento. Informe o valor do produto na promoção.




function resultado () {

    var medicamento = document.getElementById('medicamento').value

    var preço = document.getElementById('preço').value

    var promoção = preço * 2
    var promoção1 = Math.floor(promoção)


    var msg = document.getElementById('msg').innerHTML = `Você ganhou promoção de ${medicamento}`

    var preço = document.getElementById('resultado').innerHTML = `Leve 2 unidades por apenas R$:${promoção1.toFixed(2)}. `

}

    var btShow = document.getElementById('btShow')
    btShow.addEventListener('click' , resultado)


