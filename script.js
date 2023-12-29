//your JS code here. If required.
 
    function handleInput(input) {
      const codeContainer = document.getElementById("codeContainer");
      const inputs = codeContainer.querySelectorAll(".code");

      if (input.value !== "") {
        // Move to the next input field
        const nextInput = input.nextElementSibling;
        if (nextInput) {
          nextInput.focus();
        }
      } else {
        // Backspace pressed, move to the previous input field
        const prevInput = input.previousElementSibling;
        if (prevInput) {
          prevInput.focus();
        }
      }
    }
