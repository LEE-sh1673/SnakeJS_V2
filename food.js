import { onSnake, expandSnake, speedUp } from './snake.js';
import { randomGridPosition } from './grid.js';

const EXPANSION_RATE = 1;

let food = { x: 10, y: 15 }; // css grid start at 1, not 0.

export function update() {
	if (onSnake(food)) {
		expandSnake(EXPANSION_RATE);
		food = getRandomFoodPosition();
		speedUp();
	}
}

export function draw(gameBoard) {
	const foodElement = document.createElement('div');
	foodElement.style.gridRowStart = food.y;
	foodElement.style.gridColumnStart = food.x;
	foodElement.classList.add('food');
	gameBoard.appendChild(foodElement);
}

function getRandomFoodPosition() {
	let newFoodPosition;

	while (newFoodPosition == null || onSnake(newFoodPosition)) {
		newFoodPosition = randomGridPosition();
	}
	return newFoodPosition;
}