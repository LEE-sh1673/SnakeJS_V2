import {
  update as updateSnake,
  draw as drawSnake,
  getSnakeHead,
  snakeIntersection,
  snakeSpeed,
} from "./snake.js";
import { update as updateFood, draw as drawFood } from "./food.js";
import { outsideGrid } from "./grid.js";

const gameBoard = document.getElementById("jsGameBoard");
let lastRenderTime = 0;
let gameOver = false;

function checkDeath() {
  gameOver = outsideGrid(getSnakeHead()) || snakeIntersection();
}

function update() {
  updateSnake();
  updateFood();
  checkDeath();
}

function draw() {
  gameBoard.innerHTML = "";
  drawSnake(gameBoard);
  drawFood(gameBoard);
}

/*
window.requestAnimationFrame(callback(timestamp) {...});

timestamp: 함수가 실행됐을 때의 timestamp 값 (단위: ms)

--> tell me when i can actually render my next frame. 
(requesting a frame to animate my game and this is going to tell us what is the current time is when we
actually go to render that frame.)
*/
function main(currentTime) {
  if (gameOver) {
    if (confirm("Your lost. Press 'OK' to restart.")) {
      window.location.reload();
    }
    return;
  }

  window.requestAnimationFrame(main);
  const secondSinceLastRender = (currentTime - lastRenderTime) / 1000; // delay between each one of the render frame.

  // secondSinceLastRender less then half seconds each move, we don't move our snake.
  /*
		초당 60프레임으로 매번 호출되므로 특정 초마다 동작을 하게 하려면 
		마지막 프레임과 현재 프레임 사이의 delay가 특정 초에 해당하는 만큼 
		도달해야 원하는 대로 동작할 수 있다. 

		따라서 뱀을 움직이는 아래쪽 코드와 마지막 프레임의 초 값을 새로 저장하는 코드는 
		특정 delay 값 전까지는 실행되지 않는다.
	*/
  if (secondSinceLastRender < 1 / snakeSpeed) {
    return;
  }
  lastRenderTime = currentTime;

  update();
  draw();
}

window.requestAnimationFrame(main);
