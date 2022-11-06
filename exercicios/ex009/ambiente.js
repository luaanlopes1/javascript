
//num [3] = 6
//num.push(7) // Colocar o indice no ultimo dado da variavel. Muito importante
//num.length // Contar o tamanho dos caracteres
//num.sort() // Coloca todos os dados em ordem crescente.

 /*


 for(let pos=0; pos < valores.length; pos++) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`) */


let valores = [5,8,9,2,1]

for(let pos in valores) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)

}