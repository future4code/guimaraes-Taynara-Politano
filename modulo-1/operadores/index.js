/* 1. Leia o código abaixo. Indique todas as mensagens impressas no console, **SEM EXECUTAR o programa**.
    
    ```jsx
    const bool1 = true
    const bool2 = false
    const bool3 = !bool2
    
    let resultado = bool1 && bool2
    console.log("a. ", resultado)
    
    resultado = bool1 && bool2 && bool3 
    console.log("b. ", resultado) 
    
    resultado = !resultado && (bool1 || bool2) 
    console.log("c. ", resultado)
    
    console.log("d. ", typeof resultado)
    ```

    Resposta: No exercicio usamos operador E para comparar os elementos bool1 bool2 bool3

    let resultado = bool1 && bool2   // a. irá retornar no console.log false
    resultado = bool1 && bool2 && bool3  // b. irá retornar no console.log false
    resultado = !resultado  && (bool1 || bool2 ) // c. irá retornar no console.log true
    // d. irá retornar no console.log o tipo da variavel que é boolean

2. Seu colega se aproxima de você falando que o código dele não funciona como devia.  Vamos ajudá-lo: consegue perceber algum problema? O que será impresso no console? 
    
    ```jsx
    let primeiroNumero = prompt("Digite um numero!")
    let segundoNumero = prompt("Digite outro numero!")
    
    const soma = primeiroNumero + segundoNumero
    
    console.log(soma)
    ```

    resposta: faltou o Number 

3. Para o exercício anterior, sugira ao seu colega uma solução para que o valor impresso no console seja, de fato, a soma dos dois números.
      let primeiroNumero = prompt(Number("Digite um numero!"))
    let segundoNumero = prompt(Number("Digite outro numero!"))
    
    const soma = primeiroNumero + segundoNumero


    
    console.log(soma)

    */

/*
    //exercicio 1
    const suaIdade = Number(prompt("Qual sua idade?"))
    const idadeDoBff = Number(prompt("Qual a idade do seu melhor amigo?"))
    console.log(`Sua idade é maior do que a do seu amigo? ${suaIdade>idadeDoBff}`) 
    console.log(`A diferença entre nossas idades é ${suaIdade-idadeDoBff}`)

// exercicio 2
const numeroPar = Number(prompt("Escreva um número par"))
console.log(numeroPar % 2)

//Quando se coloca um numero par e esse numero é dividido por 2, ele retornará zero pois não apresenta resto na divisão
//Quando se coloca num numero impar ele imprime no console 1 e embaixo 30. Não sei se isso significaria o resto


//exercicio 3
let idadeEmAnos = Number(prompt("Qual a sua idade em anos"))
let idadeEmMeses =idadeEmAnos*12
let idadeEmDias = idadeEmAnos*365
let idadeEmHoras = idadeEmDias*24

console.log(`Sua idade é: ${idadeEmAnos}, sua idade em meses é: ${idadeEmMeses}, sua idade em dias é ${idadeEmDias} e sua idade em horas é ${idadeEmHoras}`)

//exercicio 4
const numeroUm = Number(prompt("Escolha um numero"))
const numeroDois = Number(prompt("Escolha outro numero"))

console.log(`O primeiro numero é maior que o segundo? ${numeroUm> numeroDois}`)
console.log(`O primeiro numero é igual ao segundo? ${numeroUm === numeroDois}`)
console.log(`O primeiro numero é divisivel pelo segundo? ${numeroUm % numeroDois}`)
console.log(`O segundo numero é divisivel pelo primeiro? ${numeroDois % numeroUm}`)*/

/*Todos os exercícios aqui são de escrita de código! 

1. Para este exercício, será necessário o conhecimento das fórmulas para mudar a unidade de temperatura entre Graus Celsius(°C),  Graus Fahrenheit(°F) e Kelvin(K). Abaixo estão duas delas:
    - Graus Fahrenheit(°F) para Kelvin(K)
        
        ```
        (KELVIN) = (GRAUS_FAHRENHEIT - 32)*(5/9) + 273.15
        ```
        
    - Graus Celsius(°C) para Graus Fahrenheit (°C)
        
        ```
        (GRAUS_FAHRENHEIT) = (GRAUS_CELSIUS)*(9/5) + 32
        ```
        
    
    a) Calcule e mostre o valor de 77°F em  K, mostrando a unidade no console também.
    
    b) Calcule e mostre o valor de 80°C em °F, mostrando a unidade no console também
    
    c) Calcule e mostre o valor de 30°C em °F e K, mostrando as unidades no console também
    
    d) Altere o último item para que o usuário insira o valor em graus Celsius que ele deseja converter

    */

   let kelvin1 = 77
   console.log(kelvin1)
   kelvin1 = (kelvin1 -32)*(5/9) + 273.15
   console.log(`77 Fahrenheits é igual a + ${kelvin1}+K`)

let celsius1 = 80
console.log(celsius1)
let grausFahrenheit = (celsius1 *9/5) + 32
console.log (`80 Celsius é igual a ${grausFahrenheit} graus Fahrenheits`)

let celsius2 = 30
let grausFahrenheit2 = (celsius2 *9/5) + 32
let grausKelvin2 = (grausFahrenheit2 -32) *(5/9) + 273.15

console.log (`30 graus celsius é igual a ${grausFahrenheit2} Fahrenheit e ${grausKelvin2} Kelvin`)

let conversao =Number(prompt("Insira sua temperatura Celsius"))
let formulaDeConversaoF = (conversao *9/5) + 32
let formulaDeConversaoK = (formulaDeConversaoF -32) *(5/9) + 273.15

console.log(` A temperatura ${conversao} Celsius se tornará ${formulaDeConversaoF} Fahrenheit e ${formulaDeConversaoK} Kelvin`)

/*2. Quilowatt-hora é uma unidade de energia; e é muito utilizada para se determinar o consumo de energia elétrica em residências. 
Sabe-se que o quilowatt-hora de energia custa R$0.05. Faça um programa que receba a quantidade de quilowatts consumida por uma residência.
    
    a) Calcule e mostre o valor a ser pago por uma residência que consuma 280 quilowatt-hora
    
    b) Altere o programa para receber mais um valor: a porcentagem de desconto. 
    Calcule e mostre o valor a ser pago pela mesma residência acima considerando 15% de desconto

    */

    let quillowattHora = 0.05
    console.log(`O valor de um quillowatt hora é de R$ ${quillowattHora} `)


    let residencia1 =(quillowattHora*280)
    console.log(`a Residencia 1 consome R$${residencia1}`)

    let descontoDeLuz =(residencia1 -residencia1 *0.15)
    console.log(`A residencia pagará o valor de R$${descontoDeLuz} com o novo desconto`)


    /*3. Um grande problema que o mundo tem atualmente é a quantidade de unidades que existem para representar a mesma coisa. Por exemplo, para representar a Massa de um corpo, podemos usar quilograma (kg), onça (oz) e até libra (lb). Para representar Distâncias, existem metro (m), pés (ft), milha (mi). Até para volumes, há várias opções: litro (l), galão (gal),  xícaras (xic). Dada essa introdução, faça o que se pede:
    
    a) Procure uma forma de converter libra (lb) para quilograma (kg) e escreva um programa que converta 20lb para kg. Imprima  a resposta no console da seguinte forma: 
    `20lb equivalem a X kg`
    
    b) Procure uma forma de converter onça (oz) para quilograma (kg) e escreva um programa que converta 10.5oz para kg. Imprima  a resposta no console da seguinte forma: 
    `10.5oz equivalem a X kg`
    
    c) Procure uma forma de converter milha (mi) para metro (m) e escreva um programa que converta 100mi para m. Imprima  a resposta no console da seguinte forma: 
    `100mi equivalem a X m`
    
    d) Procure uma forma de converter pés (ft) para metro (m) e escreva um programa que converta 50ft para m. Imprima  a resposta no console da seguinte forma: 
    `50ft equivalem a X m`
    
    e) Procure uma forma de converter galão (gal) para litro (l) e escreva um programa que converta 103.56gal para litro. Imprima  a resposta no console da seguinte forma: 
    `103.56gal equivalem a X l`
    
    f) Procure uma forma de converter xícara (xic) para litro (l) e escreva um programa que converta 450xic para litro. Imprima  a resposta no console da seguinte forma: 
    `450 xic equivalem a X l`
    
    g) Escolha ao menos **um** dos itens anteriores e modifique o programa para que ele peça ao usuário o valor da unidade original antes de converter


    */

    let libra = 20
    let kilos = libra *0.454
    console.log(`20 libras equivalem a ${kilos} quilos`)


    let onca = 10.5
    let kilos2 = onca / 35.274
    console.log(`10.5oz equivalem a ${kilos2} quilos`)

    let milha = 100
    let metro = milha * 1609
     
    console.log(`100 milhas equivalem a ${metro} metros`)

    let pes = 50
    let metro2 = (pes / 3,208)

   console.log(`50 pés equivalem a ${metro2} metros`)

   let galao = 103.56
   let litro = galao * 3785

   console.log(`103.56 gal equivalem a ${litro} litros`)

   let xicara = 450
   let litro2 = xicara * 6 / 25

   console.log(`450 xícaras equivalem a ${litro2} litros`)

 let conversaoParaQuilos =Number(prompt("Insira sua massa em libras"))
 let formulaDeConversaoQuilo = conversaoParaQuilos *0.454
    console.log(`A massa em libras se tornará ${formulaDeConversaoQuilo} quilos`)





