document.addEventListener('DOMContentLoaded', function() {
    // Tu código existente aquí

    function register() {
        // Obtener valores del formulario de registro
        let name = document.getElementById("formGroupExampleInput2").value;
        let email = document.getElementById("inputEmail4").value;
        let password = document.getElementById("inputPassword4").value;
        let city = document.getElementById("inputCity").value;
        let state = document.getElementById("inputState").value;
        let zip = document.getElementById("inputZip").value;
        let address = document.getElementById("inputAddress").value;

        // Aquí puedes realizar validaciones y luego almacenar los datos del usuario

        // Por simplicidad, aquí solo mostramos un mensaje
        alert("Registro exitoso");

        // Redirigir a la página de perfil del usuario con los datos
        window.location.href = "login.html?";
    }

    window.register = register;

    window.login = function() {
        // Obtener valores del formulario de inicio de sesión
        let email = document.getElementById("floatingInput").value;
        let password = document.getElementById("floatingPassword").value;

        // Obtener valores del formulario de registro (puedes almacenar estos valores en una base de datos o donde prefieras)
        let registeredEmail = document.getElementById("inputEmail4").value;
        let registeredPassword = document.getElementById("inputPassword4").value;

        // Verificar credenciales
        if (email === registeredEmail && password === registeredPassword) {
            alert("Inicio de sesión exitoso");
            // Redirigir a la página de perfil del usuario con los datos
            window.location.href = "perfil.html?name=" + encodeURIComponent(name) + "&email=" + encodeURIComponent(email) + "&city=" + encodeURIComponent(city) + "&state=" + encodeURIComponent(state) + "&zip=" + encodeURIComponent(zip) + "&address=" + encodeURIComponent(address);
        } else {
            alert("Credenciales incorrectas");
        }

        window.location.href = "perfil.html?name=" + encodeURIComponent(name) + "&email=" + encodeURIComponent(email) + "&city=" + encodeURIComponent(city) + "&state=" + encodeURIComponent(state) + "&zip=" + encodeURIComponent(zip) + "&address=" + encodeURIComponent(address);
    };
});
