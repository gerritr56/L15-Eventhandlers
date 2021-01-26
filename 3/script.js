const buttonAlert = document.getElementById("mybutton")

buttonAlert.addEventListener("click", Event => {
    alert ("button clicked")
});


const toggleClassBlueBackground = function () {
    const bodyElement = document.body;
    bodyElement.classList.toggle("red-background");
  };

  const attachEventToToggleColorButton = function () {
    const ColorButton = document.getElementById("toggleColor");
    ColorButton.addEventListener("click", function () {
      toggleClassBlueBackground();
    });
  };
  attachEventToToggleColorButton()


