

function meuEscopo (){
    
    
    const form = document.querySelector(".form");
    const resultado = document.querySelector(".resultado");
    
    form.addEventListener('submit', function (e){

        e.preventDefault();

        console.log("Evento prevenido");

        const peso = form.querySelector('.peso');
        const altura = form.querySelector('.altura');

        function calculadora (peso, altura){

            let imc = "";

            if ( altura != null){
                resultado.innerHTML = `<p> altura inválida </p>`;
            }
            else if (peso != null){
                resultado.innerHTML = `<p> peso inválida </p>`;
            }
            else{
                valor = peso/altura*altura;
                if (valor < 18.5){
                    imc = "Abaixo do peso";
                }
                else if(valor >= 18.5 && valor < 24.9){
                    imc = "Peso normal";
                }            
                else if(valor >= 25 && valor < 29.9){
                    imc = "Sobrepeso";
                }                
                else if(valor >= 30 && valor < 34.9){
                    imc = "Obresidade grau 1";
                }                
                else if(valor >= 35 && valor < 39.9){
                    imc = "Obresidade grau 2";
                }                
                else if(valor >= 40){
                    imc = "Obresidade grau 3";
                };             
            }
            
            resultado.innerHTML += `<p> Seu IMC é ${valor} (${imc}) </p>`;
                    
        }
        
        calculadora (peso.value, altura.value);
    });

        
    }


meuEscopo();