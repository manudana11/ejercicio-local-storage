// Declaramos las variables 

const nombreForm = document.getElementById('fname');

const emailForm = document.getElementById('femail');

const mensajeForm = document.getElementById('fmensaje');

const btn = document.getElementById('fsubmit')

const p = document.querySelector('p');

// funcion para que no recarge la pagina al enviar el form

/* function printData() {
    let userSaved = JSON.parse(localStorage.getItem('user'));
    if (userSaved) {
        p.innerText = `Su nombre es ${userSaved.nombre}, su email ${userSaved.email} y su menssaje dice así: ${userSaved.mensaje}. Gracias por contactar.`;
    } else {
        p.innerText = 'No hay datos guardados';
    }
}

function sendData(e) {
    e.preventDefault();
    const valorNombre = nombreForm.value;
    const valorEmail = emailForm.value;
    const valorMensaje = mensajeForm.value;
    localStorage.setItem ('user', JSON.stringify({
        nombre: valorNombre,
        email: valorEmail,
        mensaje: valorMensaje
    }));
    printData();
}


printData();

btn.addEventListener('click', sendData);

console.log(localStorage); */


// Guardar en Local Storage los datos de contacto enviados de cada usuario (ir guardandolos todos)

function savedUsers(e) {
    e.preventDefault();
    let valorNombre = nombreForm.value;
    let valorEmail = emailForm.value;
    let valorMensaje = mensajeForm.value;
    
}