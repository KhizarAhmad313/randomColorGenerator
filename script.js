colorCode = document.getElementById("colorCode");
btn = document.getElementById("btn");

const updateColor = () => {
  let num = Math.floor(Math.random() * 16777215);
  let randomColor = "#" + num.toString(16);
  document.body.style.backgroundColor = randomColor;
  colorCode.innerText = randomColor;
  navigator.clipboard.writeText(randomColor);
};

btn.addEventListener("click", () => {
  updateColor();
});
