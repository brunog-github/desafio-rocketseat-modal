// MINHA RESOLUÇÃO DO DESAFIO

const button = document.querySelector('#openModal')
const modalWrapper = document.querySelector('.modal-wrapper')

// Remove a class do elemento
function abrirJanela() {
    modalWrapper.classList.remove('invisible') 
}

// Adiciona a class ao elemento
function fecharJanela() {
    modalWrapper.classList.add('invisible')
}

/* // VERIFICA SE O ELEMENTO DIV NO HTML POSSUE A CLASS 'INVISIBLE'
function verificador(invisible) {
    invisible = modalWrapper.classList.contains('invisible')
   
   if(invisible == true){
    console.log(`A div modal-wrapper contem a class invisible.`)
   }if(invisible == false){
    console.log(`A div modal-wrapper não contem a class invisible.`)
   }
} */


// Remove a class clicando no botão
button.addEventListener('click', abrirJanela )

// Adiciona a class ao pressionar qualquer tecla
document.addEventListener('keydown', fecharJanela)


// RESOLUÇÃO DO PROFESSOR

/* const buttonOpenModal = document.getElementById('openModal')
const modalWrapper = document.querySelector('.modal-wrapper')

buttonOpenModal.onclick = function() {
    modalWrapper.classList.remove('invisible')
}

document.addEventListener('keydown', function(event) {
    const isEscKey = event.key === 'Escape'

    if(isEscKey){
        modalWrapper.classList.add('invisible')
    }
}) */
