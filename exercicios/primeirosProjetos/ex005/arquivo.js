


function insert(num) { 

   let numero = document.getElementById('tela').innerHTML
   document.getElementById('tela').innerHTML = numero + num;


}

function calcular () { 

   let resultado = document.getElementById('tela').innerHTML
   if (resultado)
   {
    document.getElementById('tela').innerHTML= eval(resultado);
    
   }
   

   else {
    document.getElementById('tela').innerHTML = "Erro"
   }

}

function limpar () {
    document.getElementById('tela').innerHTML = ""
}
