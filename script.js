const redSlider = document.querySelector("#redSlider");
const greenSlider = document.querySelector("#greenSlider");
const blueSlider = document.querySelector("#blueSlider");
const randomButton = document.querySelector("#random-button");
const colorValue = document.querySelector(".color-value");
const colorApp = document.querySelector(".color-field");

function updateColor() {
  const redValue = redSlider.value; //call html value of each slider. the value property is set in the element and contains a number from 0 to 255.
  const greenValue = greenSlider.value;
  const blueValue = blueSlider.value;

  colorValue.textContent = `RGB: (${redValue}, ${greenValue}, ${blueValue})`;

  colorApp.style.backgroundColor = `rgb(${redValue},${greenValue},${blueValue})`;
}

redSlider.addEventListener("input", updateColor);
greenSlider.addEventListener("input", updateColor);
blueSlider.addEventListener("input", updateColor);

// Call the program
updateColor();
