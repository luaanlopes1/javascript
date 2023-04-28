


// Deckara e inicializa contadores e acumuladores ( variaveis globais)

var numContas = 0
var valTotal = 0

// Variavel string que acumula as contas

var resposta = ''

function registrarConta() { 

    // referencia os elementos da página manipulados pela function

    var inDescricaoConta = document.getElementById('inDescricaoConta').value
    var inValor = document.getElementById('inValor').value
    var outListaContas = document.getElementById('outListaContas')
    var outTotal = document.getElementById('outTotal')

    var valor = Number(inValor)

    // Criar if pra verificar se esta zerado

    if (inDescricaoConta == '' || valor == 0) { 
        alert('Informe os dados corretamente...')
        return
    }

    // Adicina valores ao contador e acumulador

    numContas++
    valTotal = valTotal + valor

    // Concatena as contas

    resposta = `${resposta + inDescricaoConta} - R$:${valor.toFixed(2)} \n`

    // Altera o conteúdo das tags de resposta

    outListaContas.innerHTML = `${resposta} -----------------------------------`

    outTotal.innerHTML = `${numContas} Conta(s) - Total R$:${valTotal.toFixed(2)}`

    // limpa os cmapos e posiciona o cursor em inDescricao

    document.getElementById('inDescricaoConta').value = ''
    document.getElementById('inValor').value = ''
    document.getElementById('inDescricaoConta').focus()

}

//  Referencia elemento e apos associa function ao evento click

var btRegistrar = document.getElementById('btRegistrar')
btRegistrar.addEventListener('click', registrarConta)