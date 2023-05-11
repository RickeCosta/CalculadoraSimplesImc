/// mapear os seletores

const btnCalcular = document.querySelector('#calcular');


// função

function calcularImc(){
    const nome = document.querySelector('#nome').value
    const peso = document.querySelector('#peso').value
    const altura = document.querySelector('#altura').value
    const resultado = document.querySelector('#resultado')

    if(nome !='' && peso !='' && altura !=''){

        const imc = (peso / (altura * altura)).toFixed(1);

        let classificacao = '';

        if (imc < 18.5){
            classificacao = 'abaixo do peso.';
        }else if (imc < 25) {
            classificacao = 'com peso ideal. Parabéns!!!';
        }else if (imc < 30){
            classificacao = 'levemente acima do peso.';
        }else if (imc < 35){
            classificacao = 'com obesidade grau I.';
        }else if (imc < 40){
            classificacao = 'com obesidade grau II';
        }else {
            classificacao = 'com obesidade grau III. Cuidado!!';
        }
        resultado.textContent = `${nome} seu IMC é ${imc} e você está ${classificacao}`;

        
    }else{
        resultado.textContent = 'Por favor preencha todos os campos!'

    }
    
    
}


btnCalcular.addEventListener('click', calcularImc);


