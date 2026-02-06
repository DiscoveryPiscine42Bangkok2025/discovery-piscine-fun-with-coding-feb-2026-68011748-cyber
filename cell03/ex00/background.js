const button = document.getElementById("btn");

button.addEventListener("click", function () {
  const randomColor =
    "rgb(" +
    Math.floor(Math.random() * 256) + "," +
    Math.floor(Math.random() * 256) + "," +
    Math.floor(Math.random() * 256) +
    ")";

  document.body.style.backgroundColor = randomColor;
});
