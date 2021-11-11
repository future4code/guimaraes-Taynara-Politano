//Exercícios de interpretação de código
/*
1. Analise o programa abaixo e diga o que será impresso no console, **SEM EXECUTAR o programa.**
    
    ```jsx
    let a = 10
    let b = 10
    
    console.log(b)
    
    b = 5
    console.log(a, b)
    ```

    resposta: 
    declaração de variavel 
    let a recebe 10
    let b recebe 10
    let b atribui novo valor ao variavel b de 5
    printar (a com valor de 10, b com valor de 5 )

    
2. Analise o programa abaixo e diga o que será impresso no console, **SEM EXECUTAR o programa.**
    
    ```jsx
    let a = 10
    let b = 20
    c = a
    b = c
    a = b
    
    console.log(a, b, c)
    ```
    let a recebe 10
    let b recebe 20
    c atribuiu o valor de a = 10
    b atribuiu o valor de c = 10
    a atribuiu o valor de b = 10
    printar (10, 10, 10)

    obs: acho que se rodasse o programa iria dar erro, pois não declararam c (faltou a let)
    
3. Analise o programa abaixo, entenda o que ele faz e **sugira melhores nomes para as variáveis**. Lembre-se que devemos escolher nomes significativos, usar o padrão **camelCase**. Alem disso, os nomes não podem começar com números ou caracteres especiais.
    
    ```jsx
    let p = prompt("Quantas horas você trabalha por dia?")
    let t = prompt("Quanto você recebe por dia?")
    alert(`Voce recebe ${t/p} por hora`)
    ```
resposta: let horasTrabalhadas = prompt ("Quantas horas você recebe por dia")
let = valorRecebidoDiario = prompt ("Quanto você recebe por dia")
alert (´Você recebe ${valorRecebidoDiario/horasTrabalhadas} por hora´)
*/

//Exercício de escrita de código

const nome= "Taynara"
let idade= 28

console.log(typeof nome);
console.log(typeof idade);

//O primeiro foi impresso como string pois "Taynara" estava entre aspas
//O segundo foi impresso como number pois 28 não tem aspas.

prompt("Qual o seu nome?");
prompt("Qual sua idade?");

console.log(`Meu nome é ${nome} e eu tenho ${idade}anos de idade`);

let roupaAzul =prompt("Você está de roupa azul?");
let maiorIdade =prompt("Você é maior de idade?");
let cabeloComprido =prompt("Você tem cabelo comprido?");
 
/*
let a=10
let b=25
let c=a

a=b
b=c




