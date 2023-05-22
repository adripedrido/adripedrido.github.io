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
  
      if (!usrName.trim()) {
        errors.usrName = "El nombre de usuario es requerido";
      }

      if (!correo.trim()) {
        errors.correo = "El correo electrónico es requerido";
      }
  
      if (!passwd.trim()) {
        errors.passwd = "La contraseña es requerida";
      }
  
      if (passwd !== repeatPasswd) {
        errors.repeatPasswd = "Las contraseñas no coinciden";
      }
  
      if (!acepto) {
        errors.acepto = "Debe aceptar los términos y condiciones";
      }
  
      displayErrorMessages(errors);

      if (Object.keys(errors).length === 0) {
        console.log("Formulario válido. Datos a enviar:", {
          usrName: usrName,
          correo: correo,
          passwd: passwd,
          repeatPasswd: repeatPasswd,
          acepto: acepto
        });
      }
    });
  
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
  