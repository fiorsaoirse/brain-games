#!/usr/bin/env node

import readlineSync from 'readline-sync';
import { car, cdr } from 'hexlet-pairs';

const countOfTries = 3;

const sayHi = (descripton, generator) => {
  console.log('\nWelcome to the Brain Games!');
  console.log(descripton);

  const userName = readlineSync.question('\nMay I have your name? ');
  console.log(`Hello, ${userName}!\n`);

  const iter = (answersCount) => {
    if (answersCount > countOfTries) {
      console.log(`Congratulations, ${userName}!`);
      return;
    }
    const currentPair = generator();
    const question = car(currentPair);
    console.log(`Question: ${question}`);
    const rightAnswer = cdr(currentPair).toString();

    // Добавим функцию toLowerCase() для защиты от ввода пользователем ответа в верхнем регистре
    const userAnswer = readlineSync.question('Your answer: ').toLowerCase();
    if (rightAnswer === userAnswer) {
      console.log('Correct!');
      const newCount = answersCount + 1;
      return iter(newCount);
    }
    console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.\nLet's try again, ${userName}!`);
  };
  return iter(1);
};

export default sayHi;
