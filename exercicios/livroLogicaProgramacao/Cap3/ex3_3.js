


var bairro = prompt('Bairro entrega: ')
var taxaEntrega
switch (bairro) {
    case 'Centro':
        taxaEntrega = 5.00
        break;
    case 'Fragata':
    case 'Três Vendas':
        taxaEntrega = 7.00
        break
    
    case 'Laranjal':
        taxaEntrega = 10.00
        break
    default:

        taxaEntrega = 8.00
}

alert(`A Taxa de entrega para ${bairro} é de R$: ${taxaEntrega.toFixed(2)}`)

