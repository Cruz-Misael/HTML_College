function meuEscopo (){
    
    const form = document.querySelector(".form");
    const resultado = document.querySelector(".resultado");
    const pessoas = [];

    
    form.addEventListener('submit', function (e){
        e.preventDefault();

        const nome = form.querySelector('.nome');
        const sobrenome = form.querySelector('.sobrenome');
        const peso = form.querySelector('.peso');
        const altura = form.querySelector('.altura');

        console.log(nome.value);

        pessoas.push({
            nome: nome.value,
            sobrenome: sobrenome.value,
            peso: peso.value,
            altura: altura.value
        });

        

        resultado.innerHTML += `<p> ${nome.value} ${sobrenome.value} ${peso.value} ${altura.value}</p>`;




    });


};

meuEscopo();