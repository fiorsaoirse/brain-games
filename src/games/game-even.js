#!/usr/bin/env node

import { cons } from 'hexlet-pairs';
import sayHi from '../engine';

const description = 'Answer "yes" if number even otherwise answer "no".';
const countOfQuestion = 3;

const generateNum = (min, max) => Math.floor(Math.random() * (max - min)) + min;

const isEvenNumber = num => num % 2 === 0;

const gameStart = () => {
  const iter = (currentQuestion, arrayOfPairs) => {
    if (currentQuestion > countOfQuestion) {
      return arrayOfPairs;
    }

    // Вернем случайное число от 1 до 20
    const question = generateNum(1, 20);
    const rightAnswer = isEvenNumber(question) === true ? 'yes' : 'no';
    const currentPair = cons(question, rightAnswer);
    const newCount = currentQuestion + 1;
    arrayOfPairs.push(currentPair);
    return iter(newCount, arrayOfPairs);
  };
  const arrayOfQuestionsAnswers = iter(1, []);
  sayHi(description, arrayOfQuestionsAnswers);
};

export default gameStart;
