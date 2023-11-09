document.addEventListener("DOMContentLoaded", function () {
    var cookieBanner = document.getElementById("cookie-banner");
    var acceptCookiesButton = document.getElementById("accept-cookies");
  
    if (!getCookie("cookiesAccepted")) {
      // Si la cookie de aceptación no existe, muestra el banner
      cookieBanner.style.display = "block";
    }
  
    acceptCookiesButton.addEventListener("click", function () {
      // Cuando se hace clic en el botón de aceptar cookies, oculta el banner y establece una cookie de aceptación que expira en un año
      cookieBanner.style.display = "none";
      setCookie("cookiesAccepted", "true", 365);
    });
  });
  
  function setCookie(name, value, days) {
    var expires = "";
    if (days) {
      var date = new Date();
      date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
      expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + value + expires + "; path=/";
  }
  
  function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(";");
    for (var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == " ") c = c.substring(1, c.length);
      if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
  }
  

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