

const form = document.getElementById("form");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  let isValid = true;
  const errorDiv = document.getElementById("errors");
  errorDiv.innerHTML = "";

  //Obteniendo los valores de los campos del formulario
  const { name, email, message } = form.elements;
  
  //Validando que el nombre solo contenga letras permitiendo espacios

  

  if (!/^[a-zA-Z\s]+$/.test(name.value)) {
    isValid = false;
    errorDiv.innerHTML += `<div style='background-color:red; color:white; padding:5px;'>El Nombre solo debe contener letras!</div>`;
  }
  
  //Validando que el nombre tenga un minimo de 5 letras y un maximo de 15
  if (name.value.length < 5 || name.value.length > 15) {
    isValid = false;
    errorDiv.innerHTML += `<div style='background-color:red; color:white; padding:5px;'>El Nombre debe contener al menos 5 letras y un máximo de 15 letras</div>`;
  }
  
  //Validando que el email tenga un formato correcto
  if (!/^\w+([.-]?\w+)*@(gmail|hotmail)+(\.com|\.mx|\.es)$/.test(email.value)) {
    isValid = false;
    errorDiv.innerHTML += `<div style='background-color:red; color:white; padding:5px;'>Email inválido! Debe contener @gmail.com/.es o @hotmail.com/.es (sin símbolos)</div>`;
  }
  
  //Validando que el mensaje tenga un minimo de 20 caracteres
  if (message.value.length < 20) {
    isValid = false;
    errorDiv.innerHTML += `<div style='background-color:red; color:white; padding:5px;'>El mensaje es obligatorio y debe tener un mínimo de 20 caracteres</div>`;
  }

  //Si todas las validaciones son correctas, se envia el formulario
  if (isValid) {
    console.log(Error);
  } else {
    //Sino se muestra un mensaje de error y se limpia despues de 3 seg
    setTimeout(() => {
      errorDiv.innerHTML = "";
    }, 4000);
  }
});
