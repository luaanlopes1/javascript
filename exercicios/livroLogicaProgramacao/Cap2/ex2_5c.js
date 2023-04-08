


function Ativar () {

    // Declarar os elementos

    var inProduct = document.getElementById('inProduct').value
    var inPrice = document.getElementById('inPrice').value

    var metade = inPrice / 2
    var triplo = inPrice * 3
    var resposta = triplo - metade


    document.getElementById('outProduct').innerHTML = `${inProduct} - Promotion: Take 3 for $${resposta.toFixed(2)} .`

    document.getElementById('outPrice').innerHTML = `The 3º Product cust only $${metade.toFixed(2)}`


}

var btPromotion = document.getElementById('btPromotion')
btPromotion.addEventListener('click', Ativar)