
const pacientes = [] //vetor global

function adicionarPaciente() { 

    // Cria referencia aos elementos de entrada e saída de dados da página.

    var inPaciente = document.getElementById('inPaciente').value
    var outLista = document.getElementById('outLista')

    // Verificar o rpeenchimento do nome do paciente

    if (inPaciente == '') { 
        alert ('Informe o nome do paciente')
        inPaciente.focus()
        return
    }

    pacientes.push(inPaciente) // adiciona o nome no final do vetor

    var lista = '' // string para concatenar pacientes

    // percorre os elementos do vetor

    for (i = 0; i < pacientes.length; i++) { 
        lista += `${i + 1}. ${pacientes[i]} \n`
    }

    // altera o conteúdo da tag outlista

    outLista.innerHTML = lista

    // limpa o campo e posiciona cursor em inPaciente

    document.getElementById('inPaciente').value = ''
    document.getElementById('inPaciente').focus()
}

// Cria referencia ao bt adicionar e associa function do click

var btAdicionar = document.getElementById('btAdicionar')
btAdicionar.addEventListener('click', adicionarPaciente)



// URGENCIA \/ ATENDENR PACIENTE


function atenderPaciente() { 

    // Cria referencia aos elementos de entrada e saída de dados da página.

    var inPaciente = document.getElementById('inPaciente').value
    var outLista = document.getElementById('outLista')
    

    // Verificar se vetor pacientes esta vazio.

    if (pacientes.length == 0) { 
        alert ('Não há pacientes na lista de espera.')
        inPaciente.focus()
        return
    }

    // Verificando se o campo foi preenchido

    if (inPaciente == '') { 
        alert ('Informe o nome do paciente!')
        inPaciente.focus()
        return
    }

    

    pacientes.unshift(inPaciente) // adiciona o nome no início do vetor

    var lista = '' // string para concatenar pacientes

    // percorre os elementos do vetor

    for (i = 0; i < pacientes.length; i++) { 
        lista += `${i + 1}. ${pacientes[i]} \n`
    }

    // altera o conteúdo da tag outlista

    outLista.innerHTML = lista

    // limpa o campo e posiciona cursor em inPaciente

    document.getElementById('inPaciente').value = ''
    document.getElementById('inPaciente').focus()
}

var btUrgencia = document.getElementById('btUrgencia')
btUrgencia.addEventListener('click', atenderPaciente)



function urgenciaPacientes () { 


    var inPaciente = document.getElementById('inPaciente').value
    var outLista = document.getElementById('outLista')
    var outAtendimento = document.getElementById('outAtendimento')

    if (pacientes.length == 0) { 
        alert('Não há pacientes na lista de espera.')
        inPaciente.focus()
        return
    }

    
    // remove paciente do inicio da fila ( e obtem nome)

    var atender = pacientes.shift()
    // exibe o nome do paciente em atendimento.

    outAtendimento.innerHTML = atender

    // string para concatenar pacientes.

    var lista = ''

    for (i = 0; i < pacientes.length; i++) { 
        lista += `${i + 1}. ${pacientes[i]} \n`
    }

    // Altera o conteúdo da tag outlista

    outLista.innerHTML = lista
}

var btAtender = document.getElementById('btAtender')
btAtender.addEventListener('click', urgenciaPacientes)