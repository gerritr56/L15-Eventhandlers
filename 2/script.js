const buttonAlert = document.getElementById("mybutton")

buttonAlert.addEventListener("click", Event => {
    alert ("button clicked")
});



const changeClassBlueBackground = function () {
    const bodyElement = document.body;
    bodyElement.classList.add("red-background");
  };
  const attachEventToChangeColorButton = function () {
    const ColorButton = document.getElementById("background-button");
    ColorButton.addEventListener("click", function () {
      changeClassBlueBackground();
    });
  };
  attachEventToChangeColorButton();
