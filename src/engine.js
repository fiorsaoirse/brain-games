#!/usr/bin/env node

import readlineSync from 'readline-sync';
import { car, cdr } from 'hexlet-pairs';

const sayHi = (descripton, arrayOfQuestionsAndAnswers) => {
  console.log('\nWelcome to the Brain Games!');
  console.log(descripton);
  const userName = readlineSync.question('\nMay I have your name? ');
  console.log(`Hello, ${userName}!\n`);
  let i = 0;
  while (i < arrayOfQuestionsAndAnswers.length) {
    console.log('Question: ', car(arrayOfQuestionsAndAnswers[i]));

    // Добавим функцию toLowerCase() для защиты от ввода пользователем ответа в верхнем регистре
    const userAnswer = readlineSync.question('Your answer: ').toLowerCase();
    const rightAnswer = (cdr(arrayOfQuestionsAndAnswers[i])).toString();
    if (rightAnswer === userAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.\nLet's try again, ${userName}!`);
      return;
    }
    i += 1;
  }
  console.log(`Congratulations, ${userName}!`);
};

export default sayHi;
