
// Em um determinado momento do dia, apenas notas de 10, 50 e 100 estão disponíveis em um terminal de caixa eletrônico. Elaborar um programa que leia um valor de saque de um cliente, veri½que sua validade (ou seja, se pode ser pago com as notas disponíveis) e informe o número mínimo de notas de 100, 50 e 10 necessárias para pagar esse saque.








function exibir () { 

    var saque = document.getElementById('saque').value
    var cem = document.getElementById('cem')
    var cinquenta = document.getElementById('cinquenta')
    var dez = document.getElementById('dez')

    var cedulaCem = 100
    var cedulaCinquenta = 50
    var cedulaDez = 10

    // Validar sem o valor do saque é menos do que as cedulas
    

    if (saque == '') { 

        alert (`Por favor digite um valor de saque.`)
        return
    }

    // Validar se o saque é menor do que a cedula minima.

    else if (saque < 10) { 
        alert (`Por favor, faça um saque maior do que R$10,00.`)
        return
    }

    // 

    else if (saque >= 10 && saque < 50 ) { 
        dez.innerHTML = (`Notas de R$10,00 = ${saque / cedulaDez} `)
    }

    else if (saque >=50) {
        cinquenta.innerHTML = (`Notas de R$50,00 = ${saque / cedulaCinquenta}`)
    }
    
    
}
var btNotas = document.getElementById('btNotas')
btNotas.addEventListener('click', exibir)


