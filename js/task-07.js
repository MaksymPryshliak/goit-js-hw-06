const conroller = document.querySelector("#font-size-control");
const fontChangedText = document.querySelector("#text");

conroller.addEventListener("input", (event) => {
  fontChangedText.style.fontSize = `${event.currentTarget.value}px`;
});
