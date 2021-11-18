// 1 - 1.  Indique todas as mensagens impressas no console, **SEM EXECUTAR o programa**.
    /*


    ```jsx 
    */

    /*
    let array
    console.log('a. ', array) //irá retornar undefinided pois a variavel não foi definida.
    
    
    
    array = null
    console.log('b. ', array)  //irá declarar nula pois  a array foi atribuida como nula 
    
    
    array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
    console.log('c. ', array.length)  //retornara o numero 11 pois é a contagem de elementos que essa array possui

    
    let i = 0
    console.log('d. ', array[i])  //retornará 3, pois o 3 está na posição 0 do array

    
    array[i+1] = 19
    console.log('e. ', array) // substituira o 4, e se tornará uma sequencia com 3, 19, 5...

    
    const valor = array[i+6]
    console.log**('f. ', valor) //retorna 9, já que i recebe 3

    /*2. Leia o código abaixo com atenção 
    
    ```jsx */
    //const frase = prompt("Digite uma frase")
    
   // console.log(frase.toUpperCase().replaceAll("A", "I"), frase.length)

    
    
    
 //Qual será o valor impresso no console se a entrada do usuário for: `"Subi num ônibus em Marrocos"`?
  // O valor seria: SUBI NUM ONIBUS EM MIRROCOS - 27 elementos

    //Exercicios de leitura de código
    //1 - 
    let  nomeDoUsuario =prompt("Qual o seu nome?")
    let emailDoUsuario =prompt("Qual o seu e-mail?")

    console.log(`O e-mail ${emailDoUsuario} foi cadastrado com sucesso, seja bem vinda(o), ${nomeDoUsuario}`)

    /*2. Faça um programa que contenha um array com 5 das suas comidas preferidas, armazenado em uma variável. Em seguida, siga os passos:
    
    a) Imprima no console o array completo
    
    b) Imprima no console a mensagem "Essas são as minhas comidas preferidas: ", seguida por cada uma das comidas, **uma embaixo da outra**.
    
    c) Aqui vai um desafio: pergunte ao usuário uma comida preferida. Troque a segunda comida da sua lista pela inserida pelo usuário. Imprima no consolea nova lista

    */

    let comidasPreferidas = ['Risoto', 'Parmegiana', 'Japonesa', 'Hamburguer', 'Churrasco' ]
    console.log(comidasPreferidas[0]);
    console.log(comidasPreferidas[1]);
    console.log(comidasPreferidas[2]);
    console.log(comidasPreferidas[3]);
    console.log(comidasPreferidas[4]);

    comidasPreferidas[1] = prompt("Qual sua comida preferida?")
    console.log(comidasPreferidas)

    /*3. Faça um programa, seguindo os passos:
    
    a) Crie um array vazio e guarde-o em uma variável, chamada `listaDeTarefas`
    
    b) Pergunte ao usuário 3 tarefas que ele precise realizar no dia e armazene-as, uma por uma, no array
    
    c) Imprima o array no console
    
    d) Peça ao usuário que digite o **índice** de uma tarefa que ele já realizou: 0, 1 ou 2 
    
    e) Remova da lista o item de índice que o usuário escolheu.
    
    f) Imprima o array no console.
    
    */

    

    const listaDeTarefas = []
    listaDeTarefas[0] = prompt('Diga uma tarefa')
    listaDeTarefas[1] = prompt('Diga uma tarefa')
    listaDeTarefas[2] = prompt ('Diga uma tarefa')


    console.log(listaDeTarefas)
    

    let indice = prompt(`Digite o indice de tarefas que você já realizou: 0 para ${listaDeTarefas[0]}, 1 para ${listaDeTarefas[1]} e 2 para ${listaDeTarefas[2]}`)
    listaDeTarefas.pop(indice);
    console.log(listaDeTarefas)*/


    //Desafios
    /*Receba uma frase e retorne um array onde cada elemento é uma das palavras da frase, ignorando os espaços

    */

    const frase = "Eu amo a Labenu";
    const array = frase.split(" ");

    console.log(array)

    //2. Dado o array `["Banana", "Morango", "Abacaxi", "Laranja", "Ameixa"]`, faça um programa que acha o índice da palavra Abacaxi e imprime tanto o índice quanto o tamanho do array


 const frutas = ["Banana", "Morango","Abacaxi", "Laranja", "Ameixa" ]
 const indiceDoAbacaxi = frutas.indexOf("Abacaxi")
 console.log(indiceDoAbacaxi)
 const comprimento = frutas.length
 console.log(`Comprimento: ${comprimento}`)
 