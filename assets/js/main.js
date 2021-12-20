
    const form = document.querySelector('.form');
    form.addEventListener('submit',function (e){
        e.preventDefault();

        let peso = e.target.querySelector('.peso');
        let altura = e.target.querySelector('.altura');
        
        peso = Number(peso.value);
        altura = Number(altura.value);

        if(!peso){
            imprimirResultado('Peso inválido!', false)
            return;
        }

        if(!altura){
            imprimirResultado('Altura inválida!', false)
            return;
        }

       /* if(!altura){
            imprimirResultado('Altura inválida!', false)
            return; 
        }*/

        const imc = getIMC(peso, altura);
        const msg = `Seu IMC é: ${imc} (${getIMCMsg(imc)})`
        imprimirResultado(msg, true);

        
    })

    function getIMC(peso, altura){
        let imc = peso / (altura**2);
        return imc.toFixed(2);
    }
    
    function getIMCMsg(imc){
        if(imc < 18.5){
            return 'Abaixo do peso'
        }
        if (imc >= 18.5 && imc < 24.9){
            return 'Peso normal'
        }
        if(imc >=25 && imc < 29.9){
            return 'Sobrepeso'
        }
        if(imc >= 30 && imc < 34.9){
            return 'Obesidade grau 1'
        }
        if(imc >= 35 && imc < 39.9){
            return 'Obesidade grau 2'
        }    
         if(imc > 40){
            return 'Obesidade grau 3'
        }
    }

    function imprimirResultado(msg, testeValidade){
        const divResultado = document.querySelector('.resultado');
        divResultado.innerHTML = '';
        const pResultado = document.createElement('p');
        pResultado.classList.add(backgroundMensagem(testeValidade));
        pResultado.innerHTML = msg;
        divResultado.appendChild(pResultado);
    }

    function backgroundMensagem(testeValidade){
        if (testeValidade === true){
            return 'paragrafo-true'
        }
        if (testeValidade === false){
            return 'paragrafo-false'
        }
    }
    