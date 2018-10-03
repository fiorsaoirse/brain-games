#!/usr/bin/env node

import readlineSync from 'readline-sync';

const gameStart = (userName) => {
	const iter = (answersCount) => {
		if (answersCount > 3) {
			return console.log(`Congratulations, ${userName}!`);
		}
		const randomNumber = generateNum(1, 20); //Вернем случайное число от 1 до 20
		console.log(`Question: ${randomNumber}`);
		const userAnswer = readlineSync.question('Your answer: ').toLowerCase();
		const isEven = randomNumber % 2;
		const isEvenNum = isEven === 0 ? 'yes' : 'no';
		if (isEvenNum === userAnswer) {
			console.log('Correct!');
			const newCount = answersCount + 1;
			return iter(newCount);
		} 
		return console.log(`\'${userAnswer}\' is wrong answer ;(. Correct answer was \'${isEvenNum}\'. \nLet\'s try again, ${userName}!`);
	}
	iter(1);
	return;
}

const generateNum = (min, max) => {
	return Math.floor(Math.random() * (max - min)) + min;
}

export default gameStart;