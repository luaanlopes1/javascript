var erros = [] // Vetor de escopo global que irá conter os números já apostados

var sorteado = Math.floor(Math.random() * 100) + 1 // Gera um número aleatório entre 1 e 100

const CHANCES = 6 // Declara constante com o número de chances pq nao altera o número.


function apostarNumero() { 

    var inNumero = document.getElementById('inNumero').value
    var numero = Number(inNumero)

    // Validar o número

    if (numero <=0 || numero >100 ) { 
        alert('Informe um número válido...')
        document.getElementById('inNumero').focus()
        return
    }

    // referencia espaços das saídas de dados

    var outDica = document.getElementById('outDica')
    var outErros = document.getElementById('outErros')
    var outChances = document.getElementById('outChances')

    // se aposta do jogador for igual ao numero sorteado

    if (numero == sorteado) { 
        alert('Parabéns!! Você acertou!!!!')
        //Troca status dos botões
        btApostar.disabled = true
        btJogar.className = 'exibe'
        outDica.innerHTML = `Parabéns!! Número sorteado: ${sorteado}.`
    } else { 

            // Ele vai procurar o numero dentro do indice erros e se retornar o local do indice , vai dizer que já apostou o número.
        
            if (erros.indexOf(numero) >= 0 ) {
                alert(`Você já apostou o número ${numero}. Tente outro...`)
            } else { 
            erros.push(numero) // adicionar número ao vetor
            var numErros = erros.length; // obtem tamanho do vetor
            var numChances = CHANCES - numErros //calcular nº de chances

            // exibe nº de erros, conteúdo do vetor e nº de chances

            outErros.innerHTML = `${numErros} = ( ${erros.join(' - ')} )`
            outChances.innerHTML = numChances

            if (numChances == 0) { 
                alert ('Suas chances acabaram...')
                btApostar.disabled = true
                btJogar.className = 'exibe'
                outDica.innerHTML = `Gamer Over!! Número sorteado: ${sorteado}.`
            } else {
                // Usa operador ternário (condicional) para mensagem da dica

                var dica = numero < sorteado ? 'maior' : 'menor'
                outDica.innerHTML = `Dica: Tente um número ${dica} que ${numero}.`
            }
        }
    }

    // Limpa campo de entrada e posiciona cursor neste campo

    document.getElementById('inNumero').value = ''
    document.getElementById('inNumero').focus()

}

var btApostar = document.getElementById('btApostar')
btApostar.addEventListener('click', apostarNumero)


function jogarNovamente () { 
    location.reload() // recarrega a página
}

var btJogar = document.getElementById('btJogar')
btJogar.addEventListener('click', jogarNovamente)

    