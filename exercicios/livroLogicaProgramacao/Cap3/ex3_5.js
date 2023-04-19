

var number = document.getElementById('number').value
var btRaiz = document.getElementById('btRaiz')
var resultText = document.getElementById('resultText')

var raiz = Math.sqrt(number)



function calcular () { 
    

var number = document.getElementById('number').value
var raiz = Math.sqrt(number)

// Se não colocar nenhum número vai aparecer um alerta

if (number == 0) { 

alert(`Por favor digite algum número... `)
return

// Se der a raiz quebrada, avisar que não existe raiz para o número

} else if (raiz == Math.floor(raiz))
{
    resultText.innerHTML = `A Raiz Quadrada do ${number} é ${raiz}`

}

 else { resultText.innerHTML = ` Não há Raiz exata para este número.`
    


} 

}
btRaiz.addEventListener('click', calcular)
