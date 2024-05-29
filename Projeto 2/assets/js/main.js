

function meuEscopo (){
    
    
    const form = document.querySelector("#form");

    
    form.addEventListener('submit', function (e){

        e.preventDefault();

        const inputPeso = e.target.querySelector('#peso');
        const inputAltura = e.target.querySelector('#altura');

        peso = Number(inputPeso.value);
        altura = Number(inputAltura.value);

        console.log(peso, altura);

        if (!peso) {
            setResultado('Peso inválido', false);
            return;
          }
        
        if (!altura) {
        setResultado('Altura inválida', false);
        return;
        }

        const imc = getImc(peso, altura);
        const nivelImc = getNivelImc(imc);

        const msg = `Seu IMC é ${imc} (${nivelImc}).`;

        setResultado(msg, true);

        function getNivelImc (imc) {
            const nivel = ['Abaixo do peso', 'Peso normal', 'Sobrepeso', 'Obesidade grau 1', 'Obesidade grau 2', 'Obesidade grau 3'];
          
            if (imc >= 39.9) return nivel[5];
            if (imc >= 34.9) return nivel[4];
            if (imc >= 29.9) return nivel[3];
            if (imc >= 24.9) return nivel[2];
            if (imc >= 18.5) return nivel[1];
            if (imc < 18.5) return nivel[0];
          }
          
        function getImc (peso, altura) {
        const imc = peso / altura ** 2;
        return imc.toFixed(2); // duas casas decimais
        }

        function setResultado (msg, isValid) {
        const resultado = document.querySelector('#resultado');
        resultado.innerHTML = '';
        
        const p = criaP();
        
        if (isValid) {
            p.classList.add('paragrafo-resultado'); //cria uma classe para o css
        } else {
            p.classList.add('bad'); //cria uma classe para o css
        }
        
        p.innerHTML = msg;
        resultado.appendChild(p); //insere o css na div
        }
        
        function criaP () {
            const p = document.createElement('p'); //cria elemento no documento
            return p;
        }

        
    });
}


meuEscopo();