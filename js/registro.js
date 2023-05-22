document.addEventListener("DOMContentLoaded", function() {
  var form = document.getElementById("form");
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
    } else if (!usrName.match(/^[A-Za-z]*$/)) {
      errors.usrName = "El nombre no es válido";
    }

    if (!correo.trim()) {
      errors.correo = "El correo electrónico es requerido";
    } else if (!correo.match(/^[A-Za-z._\-0-9]*@[A-Za-z]*\.[a-z]{2,4}$/)) {
      errors.correo = "El correo no es válido";
    }

    var upperCaseLetters = /[A-Z]/g;
    var lowerCaseLetters = /[a-z]/g;
    var numbers = /[0-9]/g;

    if (!passwd.trim()) {
      errors.passwd = "La contraseña es requerida";
    } else if (passwd.length < 6) {
      errors.passwd = "La contraseña debe tener al menos 6 caracteres";
    } else if (!upperCaseLetters.test(passwd) || !lowerCaseLetters.test(passwd) || !numbers.test(passwd)) {
      errors.passwd = "La contraseña debe contener minúsculas, mayúsculas y números";
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

