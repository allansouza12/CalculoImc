const form = document.querySelector ('#form');

form.addEventListener ('submit', function(e){
    e.preventDefault();
    const inputPeso = document.body.querySelector('#peso')
    const inputAltura = document.body.querySelector('#altura')

    const peso= Number(inputPeso.value);
    const altura= Number(inputAltura.value);
    
    
    if(!peso) {
        setresult('Peso inválido' ,false)
        return;
        
    }
    
    if( !altura) {
        setresult('Altura inválida' , false) 
        return;
    }
    
    
    const imc = getimc(peso,altura);
    const nivelImc= getNivelImc(imc);
    
    const msg = `Seu IMC é ${imc} e está (${nivelImc})`;
    
    setresult (msg,true);
});

function getNivelImc(imc){
    const nivel = ['abaixo do peso' , 'peso normal' , 'sobrepeso' , ' Grau 1 obesidade' , 'Grau 2 obesidade ' , 'Grau 3 obesidade'];

        if (imc >= 39.9) return nivel[5];
        if (imc >=34.9)  return nivel[4];
        if (imc >=29.9) return nivel[3];
        if (imc >=24.9) return nivel[2];
        if (imc >=18.5) return nivel[1];
        if (imc < 18.5) return nivel[0];}

function getimc(peso,altura){
    // let altura2= altura/100
    const imc =peso/altura**2
    return imc.toFixed(2);
};


function criaP(){
    const p = document.createElement('p');
    return p; 
    }


function setresult(msg , isValid){
    const result = document.querySelector ('#result')
    result.innerHTML = '';

    const p = criaP();

    if (isValid) {
        p.classList.add ('paragrafo');
        } else{
        p.classList.add ('bad');
        }
    

p.innerHTML= msg;
result.appendChild(p);
}
