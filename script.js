
function handleInput(input, nextInputIndex) {
  if (input.value !== "") {
    const nextInput = document.getElementById("code" + nextInputIndex);
    if (nextInput) {
      nextInput.focus();
    }
  }
}

document.addEventListener("keydown", function(event) {
  if (event.key === "Backspace") {
    const activeElement = document.activeElement;
    const prevInput = activeElement.previousElementSibling;
    if (!activeElement.value && prevInput) {
      prevInput.focus();
    }
  }
});
