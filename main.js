/* Função que verifica e dá play no elemento desejado */
function tocaSom(seletorAudio){
    const elemento = document.querySelector(seletorAudio);
    
    if(elemento != null && elemento.localName === 'audio'){
        elemento.play();
    }else{
        console.log('Elemento não encontrado ou seletor inválido');
    }
}

// Armazena todos os elementos em uma lista pela classe tecla
const listaDeTeclas = document.querySelectorAll('.tecla');

for(let contador=0; contador<listaDeTeclas.length; contador++){

    const tecla = listaDeTeclas[contador];
    /* classList retorna todas as classes do elemento em uma lista */
    const instrumento = tecla.classList[1];

    /* Template string */
    const idAudio = `#som_${instrumento}`;

    /* Função genérica */
    tecla.onclick = function(){
        tocaSom(idAudio);
    };

    tecla.onkeydown = function(evento){
        if(evento.code === 'Space' || evento.code ==='Enter'){
            tecla.classList.add('ativa');
        }
    }

    tecla.onkeyup = function(){
        tecla.classList.remove('ativa');
    }
}
