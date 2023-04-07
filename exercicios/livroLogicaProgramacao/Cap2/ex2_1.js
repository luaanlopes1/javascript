
// Declarando uma função

function showHi() {

//Obtém o conteúdo do campo ( com id = name)
var name = document.getElementById('name').value

// Exige no paragrafo ( resposta ) : "Olá " e o nome informado
document.getElementById('resposta').innerHTML = 'Olá ' + name;
}

// Abaixo cria uma referência ao botão com id = show la no arquivo HTML

var show = document.getElementById('show')

// registra para o botão "mostrar" um ouvinte para o evento click,
// que ao ser clicado irá chamar a função mostrarOla
show.addEventListener('click', showHi)


