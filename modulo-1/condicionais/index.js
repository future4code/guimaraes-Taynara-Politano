
/*
Tente responder os exercícios dessa seção sem executar o código. Se ficar muito difícil, pode rodar no seu computador **para analisar e pensar sobre o resultado.** 

1. Leia o código abaixo:
    
    ```jsx
    const respostaDoUsuario = prompt("Digite o número que você quer testar")
    const numero = Number(respostaDoUsuario)
    
    if (numero % 2 === 0) {
      console.log("Passou no teste.")
    } else {
      console.log("Não passou no teste.")
    }
    ```
    
    a) Explique o que o código faz. Qual o teste que ele realiza? 


 Resposta:   Esse código realiza o teste de comparar se o resto da divisão de 2 é igual a zero. Se sim, o usuario passou no teste
    Se não, não passou no teste.
    
    b) Para que tipos de números ele imprime no console "Passou no teste"? 
    Apenas para numeros que forem iguais a 0. 
    
    c) Para que tipos de números a mensagem é "Não passou no teste"? 
    Qualquer outro numero que não seja igual a 0.
    
2. O código abaixo foi feito por uma pessoa desenvolvedora, contratada para automatizar algumas tarefas de um supermercado:
    
    ```jsx
    let fruta = prompt("Escolha uma fruta")
    let preco
    switch (fruta) {
      case "Laranja":
        preco = 3.5
        break;
      case "Maçã":
        preco = 2.25
        break;
      case "Uva":
        preco = 0.30
        break;
      case "Pêra":
        preco = 5.5
        break; // BREAK PARA O ITEM c.
      default:
        preco = 5
        break;
    }
    console.log("O preço da fruta ", fruta, " é ", "R$ ", preco)
    ```
    
    a) Para que serve o código acima?
    O código acima pede para o usuario escolher uma fruta e imprime diferentes preços de acordo com a resposta que ele fornecer.

    b) Qual será a mensagem impressa no console, se o valor de fruta for `"Maçã"`?
    "O preço da fruta maçã é R$2.25"
    c) Considere que um usuário queira comprar uma `Pêra`, qual seria a mensagem impressa no console se retirássemos o `break` que está logo acima do `default` (o `break` indicado pelo comentário "BREAK PARA O ITEM c.")?
    Se retirasse o break, a pera teria o valor do Default, e aí custaria 5 reais.
3. Leia o código abaixo:
    
    ```jsx
    const numero = Number(prompt("Digite o primeiro número."))
    
    if(numero > 0) {
      console.log("Esse número passou no teste")
    	var mensagem = "Essa mensagem é secreta!!!"
    }
    
    console.log(mensagem)
    ```
    
    a) O que a primeira linha está fazendo?
    A primeira linha pede para o usuario escolher um numero
    b) Considere um usuário digitou o número 10. Qual será a mensagem do terminal? E se fosse o número -10?
    Se o usuario digitou um numero maior que zero a mensagem será: "Esse numero passou no teste". Se fosse um numero menor que 0, como -10, a mensagem será = "Essa mensagem é secreta!!!"
    c) Haverá algum erro no console? Justifique usando os conceitos de bloco ou escopo.
    Vai dar erro por ter sido declarado com let e não com var, pois var pode ser usado para o escopo global e local, enquanto que let pode ser usado para o escopo global, local e de bloco


    //Escrita de código
*/ 

/* 1. Faça um programa que pergunta ao usuário qual a idade dele e imprima no console se ele/ela pode dirigir (apenas maiores de idade).
    
    a) Faça um `prompt` para receber a idade do usuário e guarde em uma variável.
    
    b) Garanta que essa variável é do tipo `Number`, você deve usar o cast para number para isso.
    
    c) Agora veja se essa idade do usuário corresponde à idade mínima que permite dirigir. Se sim, imprima no console `"Você pode dirigir"`, caso contrário, imprima `"Você não pode dirigir."` */

    


    let idade = Number(prompt('Qual é a sua idade?'));

if (idade >= 18) {
    console.log('Você pode dirigir');
} else {
    console.log('Você não pode dirigir');
}

/*2. Agora faça um programa que verifica que turno do dia um aluno estuda. Peça para digitar **M** (matutino) ou **V** (Vespertino) ou **N** (Noturno). Imprima no console a mensagem "Bom Dia!", "Boa Tarde!" ou "Boa Noite!". Utilize o bloco `if/else`
    - 💡 Dica
        
        <aside>
        ⭐ Se o usuário digitar "V" no prompt, você deverá imprimir no console a mensagem `"Boa Tarde!"`
        Nesse caso, temos 3 resultados diferentes (Bom dia/Tarde/Noite)
        
        </aside>
        
        Se o usuário digitar "V", a saída deve ser:
        
        ```
        "Boa Tarde!"
        ```
        */

        let turno = prompt("Qual periodo você estuda? Responda com: M, V ou N para Matutino, Vespertino ou Noturno").toUpperCase()

        function turnoEstudo (turno){
             if (turno === 'M')
            {  console.log  ("Bom Dia!")}
            else if (turno === 'V')
            { console.log  ("Boa tarde!")}
            else if (turno === 'N')
            { console.log ("Boa noite!")}
            else 
            { console.log ("Turno indefinido" )}
        }
        
        (turnoEstudo(turno))


        let turnosAlunos = prompt("Diga qual turno você estuda, matutino, vespertino ou noturno")
let turno2
switch (turnosAlunos) {
  case "matutino":
    turno2 = "Bom Dia!"
    break;
  case "vespertino":
    turno2 = "Boa Tarde!"
    break;
  case "noturno":
    turno2 = "Boa Noite!"
    break;
  
  default:
    turno2 = "Digite corretamente"
    break;
}
console.log(`Seu turno é, ${turnosAlunos}, ${turno2}`)


const generoFilme = prompt("Qual o gênero do filme?").toLowerCase()
const valorIngresso = Number(prompt(`Qual o valor do ingresso?
digite o valor como 0.00`))

if(generoFilme === 'fantasia' && valorIngresso < 15.00){
console.log('Bom filme!')
} else{
    console.log('Escolha outro filme :(')
}
