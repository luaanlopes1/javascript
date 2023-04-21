
// Em um determinado momento do dia, apenas notas de 10, 50 e 100 estão disponíveis em um terminal de caixa eletrônico. Elaborar um programa que leia um valor de saque de um cliente, veri½que sua validade (ou seja, se pode ser pago com as notas disponíveis) e informe o número mínimo de notas de 100, 50 e 10 necessárias para pagar esse saque.



function exibir () { 

    var saque = document.getElementById('saque').value
    var cem = document.getElementById('cem')
    var cinquenta = document.getElementById('cinquenta')
    var dez = document.getElementById('dez')
    var cinco = document.getElementById('cinco')

    cem.innerHTML = ('')
    cinquenta.innerHTML = ('')
    dez.innerHTML = ('')
    cinco.innerHTML = ('')



    // Validar sem o valor do saque é menos do que as cedulas
    

    if (saque == '') { 

        alert (`Por favor digite um valor de saque.`)
        return
    }

    // Validar se o saque é menor do que a cedula minima.

    if (saque % 5 != 0 ) { 
        alert (`Valor inválido para notas disponíveis. Por favor verificar notas disponiveis.`)
        return
    }

    // Calcular notas de 100, 50 , 10 e 5

    var notasCem = Math.floor(saque / 100)
    var resto = saque % 100
    var notasCinquenta = Math.floor(resto / 50)
    resto = resto % 50
    var notasDez = Math.floor (resto / 10)
    resto = resto % 10
    var notasCinco = Math.floor (resto / 5)




    // Exibe a quantidade de notas 

    if ( notasCem > 0) {
        cem.innerHTML = (`Notas de R$100,00 = ${notasCem} `)

    
    }

    if (notasCinquenta > 0) {
        cinquenta.innerHTML = (`Notas de R$50,00 = ${notasCinquenta}`)
    }

    if (notasDez > 0) { 
        dez.innerHTML = (`Notas de R$10,00 = ${notasDez} `)
    }

    if ( notasCinco > 0) { 

        cinco.innerHTML = (`Notas de R$5,00 = ${notasCinco} `)
    }

    
}
var btNotas = document.getElementById('btNotas')
btNotas.addEventListener('click', exibir)


    // Criar função ao finalizar o saque.





    




