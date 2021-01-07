const mobileControlKeys = document.getElementsByClassName("controller__btn");

let inputDirection = { x: 0, y: 0 };
let lastInputDirection = inputDirection;

window.addEventListener("keydown", (event) => {
  switch (event.key) {
    case "ArrowUp":
      if (lastInputDirection.y !== 0) {
        break;
      }
      inputDirection = { x: 0, y: -1 };
      break;
    case "ArrowDown":
      if (lastInputDirection.y !== 0) {
        break;
      }
      inputDirection = { x: 0, y: 1 };
      break;
    case "ArrowLeft":
      if (lastInputDirection.x !== 0) {
        break;
      }
      inputDirection = { x: -1, y: 0 };
      break;
    case "ArrowRight":
      if (lastInputDirection.x !== 0) {
        break;
      }
      inputDirection = { x: 1, y: 0 };
      break;
  }
});

export function getInputDirection() {
  lastInputDirection = inputDirection;
  return inputDirection;
}

function handlePadInput(event) {
  const direction = event.target.attributes[1].value;
  switch (direction) {
    case "Up":
      if (lastInputDirection.y !== 0) {
        break;
      }
      inputDirection = { x: 0, y: -1 };
      break;
    case "Down":
      if (lastInputDirection.y !== 0) {
        break;
      }
      inputDirection = { x: 0, y: 1 };
      break;
    case "Left":
      if (lastInputDirection.x !== 0) {
        break;
      }
      inputDirection = { x: -1, y: 0 };
      break;
    case "Right":
      if (lastInputDirection.x !== 0) {
        break;
      }
      inputDirection = { x: 1, y: 0 };
  }
}

Array.from(mobileControlKeys).forEach((key) => {
  key.addEventListener("click", handlePadInput);
});
