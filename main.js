// Declaramos las variables 

const nombreForm = document.getElementById('fname');

const emailForm = document.getElementById('femail');

const mensajeForm = document.getElementById('fmensaje');

const btn = document.getElementById('fsubmit');

const p = document.querySelector('p');

const deleteInfo = document.getElementById('fdelete');

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

function allUsers(e) {
    e.preventDefault();
    const valorNombre = nombreForm.value;
    const valorEmail = emailForm.value;
    const valorMensaje = mensajeForm.value;
    const user = {
        nombre: valorNombre,
        email: valorEmail,
        mensaje: valorMensaje
    };
    let savedUsers = JSON.parse(localStorage.getItem('users')) || [];
    savedUsers.push(user);
    localStorage.setItem('users', JSON.stringify(savedUsers));
    console.log(localStorage);
}

btn.addEventListener('click', allUsers);

// Mostrar los datos de los contactos guardados en el DOM

function loadUsers() {
    const userContainer = document.getElementById('user-container');
    const savedUsers = JSON.parse(localStorage.getItem('users')) || [];
    userContainer.innerHTML = '';
    for (let i = 0; i < savedUsers.length; i++) {
        const pUser = document.createElement('p');
        pUser.textContent = `Nombre: ${savedUsers[i].nombre}. Email: ${savedUsers[i].email}. Mensaje: ${savedUsers[i].mensaje}`;
        userContainer.appendChild(pUser);
    }
}

btn.addEventListener('click', loadUsers);

