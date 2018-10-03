#!/usr/bin/env node

import readlineSync from 'readline-sync';
import sayHi from '..';

const generateNum = (min, max) => Math.floor(Math.random() * (max - min)) + min;

const isEvenNumber = num => (num % 2 === 0 ? 'yes' : 'no');

const gameStart = () => {
  const userName = sayHi();
  console.log('Answer "yes" if number even otherwise answer "no".\n');
  const maxCounts = 3;
  const iter = (answersCount) => {
    if (answersCount > maxCounts) {
      return console.log(`Congratulations, ${userName}!`);
    }
    const question = generateNum(1, 20); // Вернем случайное число от 1 до 20
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ').toLowerCase();
    const rightAnswer = isEvenNumber(question);
    if (rightAnswer === userAnswer) {
      console.log('Correct!');
      const newCount = answersCount + 1;
      return iter(newCount);
    }
    return console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.\nLet's try again, ${userName}!`);
  };
  iter(1);
};

export default gameStart;
