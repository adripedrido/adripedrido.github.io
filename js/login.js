document.addEventListener("DOMContentLoaded", function() {
    var form = document.getElementById("form1");
    form.addEventListener("submit", function(event) {
      event.preventDefault();

      var correoInput = document.getElementById("correo");
      var passwordInput = document.getElementById("passwd");

      var correo = correoInput.value;
      var password = passwordInput.value;

      var errors = {};

      if (!correo.trim()) {
        errors.correo = "El correo electrónico es requerido";
      }

      if (!password.trim()) {
        errors.password = "La contraseña es requerida";
      } else if (password.length < 6) {
        errors.password = "La contraseña debe tener al menos 6 caracteres";
      }

      displayErrorMessages(errors);

      if (Object.keys(errors).length === 0) {
        console.log("Formulario válido. Datos a enviar:", {
          correo: correo,
          password: password
        });
      }
    });

    function displayErrorMessages(errors) {
      var correoError = document.getElementById("correoError");
      correoError.textContent = errors.correo || "";

      var passwordError = document.getElementById("passwordError");
      passwordError.textContent = errors.password || "";
    }
  });