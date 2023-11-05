// Mensaje popup
document.addEventListener("DOMContentLoaded", function() {
    const popup = document.getElementById("popup");
    const closeButton = document.getElementById("close");

    // Mostrar el mensaje emergente al cargar la página
    popup.style.display = "block";

    // Cerrar el mensaje emergente al hacer clic en la "x"
    closeButton.addEventListener("click", function() {
        popup.style.display = "none";
    });
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