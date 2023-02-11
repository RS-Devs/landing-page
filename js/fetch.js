const form = document.getElementById("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const emailApi = document.querySelector('input[type="email"]').value;
  const urlApi = `https://mailscrap.com/api/verifier-lookup/${emailApi}?apikey=5d4da59fea6753ce5c89dac72f6c89c6`;

  const errorEmail = document.getElementById("errors");

  fetch(urlApi)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Error en la respuesta de la petición");
      }
      return response.json();
    })
    .then((data) => {
      console.log(data);
      if (data.deliverable === false) {
        errorEmail.innerHTML += `<div style='background-color:red; color:white; padding:5px; border:solid 2px #000;'>El email no existe!<br><hr style='background-color:#000;border:3px solid #000;'> <p> Ingrese uno valido!</p></div>`;
        setTimeout(() => {
          errorEmail.innerHTML = "";
        }, 4000);
        return false;
      } else {
        form.submit();
      }
    })
    .catch((error) => {
      console.error(error);
    });
});
