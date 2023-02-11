
const tiltImage = document.querySelector(".js-tilt");

tiltImage.addEventListener("mousemove", (event) => {
  const x = event.clientX - tiltImage.getBoundingClientRect().left;
  const y = event.clientY - tiltImage.getBoundingClientRect().top;

  tiltImage.style.transform = `perspective(500px) rotateX(${
    -(y - tiltImage.offsetHeight / 2) / 20
  }deg) rotateY(${(x - tiltImage.offsetWidth / 2) / 20}deg) scale(1.0)`;
});

tiltImage.addEventListener("mouseleave", () => {
  tiltImage.style.transform = "none";
});
