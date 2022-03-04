
const checkMediana = ()=>{
    //referência ao elemento HTML onde será mostrado o resultado 1
    let resultado1 = document.getElementById("resultado1");

    //valor do número digitado no input
    let questao1input1 = document.getElementById("number1").value;
    
    //transforma o valor numérico em uma string
    //cria um array formado por cada dígito da string
    const arr = questao1input1.toString().split("");

    //ordena o array de forma crescente
    arr.sort((a,b)=> a-b);

    //testa se a quantidade de dígitos é ímpar
    if(arr.length%2 != 0){
        //se for ímpar
        //adquire o índice onde a mediana está situada
        //arredondando para baixo o valor referente a metade do comprimento do array
        const mediana = arr[Math.floor(arr.length/2)]

        //atribui o valor da mediana ao elemento HTML
        resultado1.innerHTML = mediana;
        
    }else{
        //se for par lança um alerta
        alert("digite um número com quantidade ímpar de algarismos") ;
    }
    
}

const checkParesComDiferenca = ()=>{
    //referência ao elemento HTML onde será mostrado o resultado 2
    let resultado2 = document.getElementById("resultado2");

    //valor do número digitado no input
    let questao2input1 = document.getElementById("number2").value;
    
    //testa se foi digitado pelo menos 2 digitos para comparação
    if(questao2input1 < 10){
        alert("Digite pelo menos 2 dígitos");
        return;
    }

    //valor da diferença digitado no input
    let diferenca = document.getElementById("diferenca").value;

    //transforma o valor numérico em uma string
    //cria um array formado por cada dígito da string
    const arr = questao2input1.toString().split("");

    //define a variável referente ao total de duplas
    //que serão encontradas
    let total = 0;

    //iteração de cada número com os outros números do array
    for(let i = 0; i<arr.length;i++){
        for(let f= arr.length; f > i;f--){
            //subtrai um número pelo outro para encontrar a diferença entre eles
            //utiliza Math.abs para tornar o resultado positivo caso o segundo número seja maior que o primeiro
            //caso a diferença seja igual a digitada pelo usuário, é somado mais 1 no total.
            if(Math.abs(arr[i]-arr[f]) == diferenca) total +=1;   
        }
    }
    //atribui o valor do total de pares com a diferença requisitada ao elemento HTML
    resultado2.innerHTML = total;

}

const criptografar = () =>{
    //referência ao elemento HTML onde será mostrado o resultado 3
    let questao3input1 = document.getElementById("text1").value;

    //valor do texto digitado no input
    let resultado3 = document.getElementById("resultado3");

    //remove os espaços em braco no texto
    const text = questao3input1.replace(/ /g, "").split("");

    //extrai a raíz quadrada do comprimento do texto
    //e define o tamanho do grid
    const gridSize = Math.ceil(Math.sqrt(text.length));

    //cria uma matriz vazia
    const matriz = [];

    //define uma string referente ao texto final encriptado
    let encriptedText= "";
    
    //iteração do tamanho do grid referente a linha
    for(let i = 0; i < gridSize;i++){
        //cria um array vazio referente ao primeiro elemento da matriz
        const linha = [];

        //iteração do tamanho do grid referente a coluna
        for(let f = 0; f < gridSize; f++){
            //atribui o valor do índice da próxima letra do texto
            let letterIndx = f+(gridSize*i);

            //testa se o índice é menor que o comprimento do texto
            if(letterIndx < text.length) {
                //se é menor insere a letra no array referente a linha i
                linha.push(text[letterIndx]);
            }else{

                //se é igual ou maior termina a iteração pois chegou ao fim do texto
                break;
            }
        }
        
        //se a linha não está vazia insere a linha na matriz
        if(linha.length>0)matriz.push(linha);
    }
   
    //iteração do tamanho do grid referente a coluna
    for(let i = 0;i < gridSize; i++){

        //iteração do tamanho do grid referente a linha
        for(let f =0;f < matriz.length;f++){
           
            //testa se i é menor que o comprimento da linha f, pois a última linha pode ser menor que o tamanho do grid
            //concatena o valor da matriz[f][i] ao valor final 
            if(i < matriz[f].length) {
                encriptedText += matriz[f][i];
            }
        }
        //concatena um espaço em braco ao valor final depois de cada coluna
        encriptedText += " ";
    }

    //atribui o valor encriptado do texto digitado ao elemento HTML
    resultado3.innerHTML = encriptedText;

}