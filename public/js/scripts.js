//Banner de Cookies
const botonAceptarCookies = document.getElementById('accept-cookies');
const avisoCookies = document.getElementById('cookie-banner');
const segundoAvisoCookies = document.getElementById('second-cookie-banner');

dataLayer = [];

if (!localStorage.getItem('accept-cookies')) {
  avisoCookies.classList.add('activo');
  segundoAvisoCookies.classList.add('activo');
} else {
  dataLayer.push({ 'event': 'cookies-aceptadas' });
}

botonAceptarCookies.addEventListener('click', () => {
  avisoCookies.classList.remove('activo');
  segundoAvisoCookies.classList.remove('activo');

  localStorage.setItem('accept-cookies', true);

  dataLayer.push({ 'event': 'accept-cookies' });
});


 // Agrega funcionalidad JavaScript aquí para manejar los comentarios y otras interacciones.
 $(document).ready(function() {
    $("#agregarComentario").click(function() {
        var comentario = $("#comentario").val();
        if (comentario.trim() !== "") {
            $("#comentarios").append("<p>" + comentario + "</p>");
            $("#comentario").val(""); // Limpiar el campo de comentario
        }
    });
});

   // Función para enviar mensajes (simulado)
   function enviarMensaje() {
    var userInput = document.getElementById('user-input').value;
    var chatBox = document.getElementById('chat-box');
    
    // Simulamos una respuesta del sistema
    var respuesta = '<p><strong>Tu:</strong> ' + userInput + '</p>' +
                    '<p><strong>Sistema:</strong> Gracias por tu pregunta. Puedes encontrar respuestas en nuestra sección de Preguntas Frecuentes.</p>';
    
    // Agregamos la respuesta al chat
    chatBox.innerHTML += respuesta;
    
    // Limpiamos el cuadro de entrada
    document.getElementById('user-input').value = '';
}

