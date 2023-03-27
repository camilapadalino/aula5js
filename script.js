//alert simples

//alert("Olá Mundo")

//alert de confirmação
//let msg = confirm("Você é um aluno?")

//alert passando valores em campos

//let msg1 = prompt("Digite seu nome:")
//document.write("Meu nome é: ", msg1, "!")

//condição if
//if(10 > 7){
    //document.write("Dez é maior que sete!")
    //document.write("<br>")

//}
//let valor = 20
//if ( valor < 10){

    //document.write( +valor+ " é maior que sete!")

//}else{
    //document.write("O valor é menor")
//}

/*
let idade = prompt("Digite sua Idade: ")
if (idade <=12){
    document.write("É uma criança")
} else if(idade <= 17){
    document.write("É um adolescente")
} else if(idade <=29){
    document.write("É um jovem")
} else{
    document.write("É um adulto")
}
*/
/*
let valor = prompt("Digite um valor: ")
if (valor > 10){
    document.write("O valor é Maior que 10")
} else{
    document.write("O valor é Menor que 10")
}
*/
let valor = prompt("Digite um número")
if(valor >= 10 && valor <= 20){
    document.write("Este valor está entre 10 e 20")
} else{
    document.write("Este valor não está entre 10 e 20")
}

let valor2 = prompt("Digite um número")
document.write("<br>")
if(valor >= 10 || valor <= 20){
    document.write("Este valor está entre 10 e 20")
} else{
    document.write("Este valor não está entre 10 e 20")
}