
function contar () { 

let inicio = document.getElementById('inicio')
let fim = document.getElementById('fim')
let passo = document.getElementById('passo')
let resultado = document.getElementById('resultado')

    if (inicio.value == 0 || fim.value == 0 || passo.value == 0){ 
       resultado.innerHTML = 'Impossível contar.'
    } else { 
        resultado.innerHTML = 'Contando: '
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if (i < f) {       
    
        // Contagem crescente
        for (let c = i; c <= f; c += p) { 
            resultado.innerHTML += `${c} `
        }
    } else { 
        //Contagem regressiva
        for (let c = i; c >= f; c -= p) { 
            resultado.innerHTML += `${c} `
        }

    }
}
}