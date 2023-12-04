
    function register() {
        // Obtener valores del formulario de registro
        let name = document.getElementById("formGroupExampleInput2").value;
        let email = document.getElementById("inputEmail4").value;
        let password = document.getElementById("inputPassword4").value;
        let city = document.getElementById("inputCity").value;
        let state = document.getElementById("inputState").value;
        let zip = document.getElementById("inputZip").value;
        let address = document.getElementById("inputAddress").value;

        alert("Registro exitoso");

        // Redirigir a la página de perfil del usuario con los datos
        window.location.href = "login.html?";
    }

    window.register = register;

     function login() {

        let email = document.getElementById("floatingInput").value; 
        let password = document.getElementById("floatingPassword").value;
    
        // Verificar credenciales
        if (email === 'admin' && password === '1234') {
            alert("Bienvenido al panel de administrador");
            window.location.href = "admin.html"; // Cambié 'window.local.href' por 'window.location.href'
        } else if (email === 'oruben2@gmail.com' && password === '1234') { // Cambié la estructura del 'if'
            alert("Inicio de sesión exitoso");
            window.location.href = "index-usuario.html"; // Cambié 'window.local.href' por 'window.location.href'
        } else {
            alert("Credenciales incorrectas");
        }
    };
    