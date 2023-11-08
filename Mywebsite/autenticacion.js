if (!localStorage.getItem('usuariosRegistrados')) {
    localStorage.setItem('usuariosRegistrados', JSON.stringify([]));
}

function registrarUsuario() {
    var nombreUsuario = document.getElementById('usuario').value.trim();
    var correoElectronico = document.getElementById('correo').value.trim();
    var contraseña = document.getElementById('contraseña').value.trim();

var usuario = {
    nombre: nombreUsuario,
    correo: correoElectronico,
    contraseña: contraseña
};
const usuariosRegistrados =  JSON.parse(localStorage.getItem('usuariosRegistrados'));
usuariosRegistrados.push(usuario);
localStorage.setItem('usuariosRegistrados', JSON.stringify(usuariosRegistrados));
console.log('Usuario registrado:', usuario);
    alert('Usuario registrado con éxito');

window.location.href = '/index.html';
}

function iniciarSesion() {
    var correoIngresado = document.getElementById('usuario-inicio').value.trim();
    var contraseñaIngresada = document.getElementById('contraseña-inicio').value.trim();

    console.log('Correo ingresado:', correoIngresado);
    console.log('Contraseña ingresada:', contraseñaIngresada);

    const usuariosRegistrados = JSON.parse(localStorage.getItem('usuariosRegistrados'));
    var usuarioEncontrado = usuariosRegistrados.find(function (usuario) {
        console.log('Correo registrado:', usuario.correo);
        console.log('Contraseña registrada:', usuario.contraseña);
        return usuario.correo === correoIngresado && usuario.contraseña === contraseñaIngresada;
    });

    if (usuarioEncontrado) {
        alert('Sesión iniciada con éxito');
        window.location.href='/home.html'
    } else {
        alert('Correo o contraseña incorrectos');
    }
}
function olvidasteContrasena() {
    var correoElectronico = prompt('Por favor, ingresa tu correo electrónico para restablecer tu contraseña:');
    
    if (correoElectronico) {
        // Verificar si el correo electrónico existe en el almacenamiento local
        var usuariosRegistrados = JSON.parse(localStorage.getItem('usuariosRegistrados'));
        var usuarioParaRecuperar = usuariosRegistrados.find(function (usuario) {
            return usuario.correo === correoElectronico;
        });

        if (usuarioParaRecuperar) {
            alert('Tu contraseña es: ' + usuarioParaRecuperar.contraseña);
        } else {
            alert('El correo electrónico ingresado no se encuentra registrado.');
        }
    }
}






