let idade = document.getElementById('idade')
let resultado = document.getElementById('resultado')
let masculino = document.getElementById('masculino')
let feminino = document.getElementById('feminino')
let sexo = document.getElementsByName('sexo')
let img = document.createElement('img')




function verificar () { 

    let data = new Date()
    let ano = data.getFullYear()
    
    
    if ( idade.value.length == 0 || idade.value > ano) { 
        alert('[ERRO] Verifique os dados e tente novamente.')
    } else { 
        let idadeReal = ano - Number(idade.value)
        let genero = ''
        img.setAttribute('id', 'foto')
        if (sexo[0].checked) {
            genero = 'Homem'
            if (idadeReal >=0 && idadeReal <10) { 
                //Criança
                img.setAttribute('src', 'imagem/bb-m.jpg')
            } else if (idadeReal < 21) {
                //Jovem
                img.setAttribute('src', 'imagem/jovem-m.jpeg')
            } else if (idadeReal < 50) {
                //Adulto
                img.setAttribute('src', 'imagem/adulto-m.jpeg')
            } else {
                //Idoso
                img.setAttribute('src', 'imagem/idoso-m.jpeg')
            }
        } else if (sexo[1].checked) { 
            genero = 'Mulher'
            if (idadeReal >=0 && idadeReal <10) { 
                //Criança
                img.setAttribute('src', 'imagem/bb-f.jpeg')
            } else if (idadeReal < 21) {
                //Jovem
                img.setAttribute('src', 'imagem/jovem-f.jpeg')
            } else if (idadeReal < 50) {
                //Adulto
                img.setAttribute('src', 'imagem/adulto-f.jpeg')
            } else {
                //Idoso
                img.setAttribute('src', 'imagem/idoso-f.jpeg')
            }
        }
        resultado.style.textAlign = 'center'
        resultado.innerHTML = `Detectamos ${genero} com ${idadeReal} anos`
        resultado.appendChild(img)
    }
    
}


