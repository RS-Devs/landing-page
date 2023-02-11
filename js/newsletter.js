const formNews = document.getElementById("form-news");
formNews.addEventListener("submit", (e) => {
  e.preventDefault();

  const emailNews = document.querySelector('input[type="email"]').value;
  const urlApiNews = `https://mailscrap.com/api/verifier-lookup/${emailNews}?apikey=5d4da59fea6753ce5c89dac72f6c89c6`;

  const errorEmailNews = document.getElementById("errorsN");

  fetch(urlApiNews)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Error en la respuesta de la petición");
      }
      return response.json();
    })
    .then((data) => {
      console.log(data);
      if (data.deliverable === false) {
        errorEmailNews.innerHTML += `<div style='background-color:red; color:white; padding:5px; border:solid 2px #000;'>El email no existe!<br><hr style='background-color:#000;border:3px solid #000;'> <p> Ingrese uno valido!</p></div>`;
        setTimeout(() => {
          errorEmailNews.innerHTML = "";
        }, 4000);
        return false;
      } else {
        formNews.submit();
      }
    })
    .catch((error) => {
      console.error(error);
    });
});
