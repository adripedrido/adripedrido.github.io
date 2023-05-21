document.addEventListener("DOMContentLoaded", function() {
    var form = document.getElementById("form1");
    form.addEventListener("submit", function(event) {
      event.preventDefault();
  
      var usrNameInput = document.getElementById("usrName");
      var correoInput = document.getElementById("correo");
      var passwdInput = document.getElementById("passwd");
      var repeatPasswdInput = document.getElementById("repeatPasswd");
      var aceptoCheckbox = document.getElementById("acepto");
  
      var usrName = usrNameInput.value;
      var correo = correoInput.value;
      var passwd = passwdInput.value;
      var repeatPasswd = repeatPasswdInput.value;
      var acepto = aceptoCheckbox.checked;
  
      var errors = {};
  
      // Validación del nombre de usuario
      if (!usrName.trim()) {
        errors.usrName = "El nombre de usuario es requerido";
      }
  
      // Validación del correo electrónico
      if (!correo.trim()) {
        errors.correo = "El correo electrónico es requerido";
      }
  
      // Validación de la contraseña
      if (!passwd.trim()) {
        errors.passwd = "La contraseña es requerida";
      }
  
      // Validación de la confirmación de contraseña
      if (passwd !== repeatPasswd) {
        errors.repeatPasswd = "Las contraseñas no coinciden";
      }
  
      // Validación de aceptar los términos y condiciones
      if (!acepto) {
        errors.acepto = "Debe aceptar los términos y condiciones";
      }
  
      // Mostrar mensajes de error
      displayErrorMessages(errors);
  
      // Enviar el formulario si no hay errores
      if (Object.keys(errors).length === 0) {
        // Aquí puedes realizar las acciones necesarias, como enviar el formulario o hacer una solicitud AJAX
        console.log("Formulario válido. Datos a enviar:", {
          usrName: usrName,
          correo: correo,
          passwd: passwd,
          repeatPasswd: repeatPasswd,
          acepto: acepto
        });
      }
    });
  
    // Función para mostrar los mensajes de error
    function displayErrorMessages(errors) {
      var usrNameError = document.getElementById("usrNameError");
      usrNameError.textContent = errors.usrName || "";
  
      var correoError = document.getElementById("correoError");
      correoError.textContent = errors.correo || "";
  
      var passwdError = document.getElementById("passwdError");
      passwdError.textContent = errors.passwd || "";
  
      var repeatPasswdError = document.getElementById("repeatPasswdError");
      repeatPasswdError.textContent = errors.repeatPasswd || "";
  
      var aceptoError = document.getElementById("aceptoError");
      aceptoError.textContent = errors.acepto || "";
    }
  });
  