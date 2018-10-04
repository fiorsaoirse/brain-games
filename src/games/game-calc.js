#!/usr/bin/env node

import { cons } from 'hexlet-pairs';
import * as math from 'mathjs';
import sayHi from '../engine';

const description = 'What is the result of the expression?';
const countOfQuestionPairs = 3;
const arrayOfOpernads = ['+', '-', '*'];

const generateNum = (min, max) => Math.floor(Math.random() * (max - min)) + min;

const calculateExpression = expression => math.eval(expression);

const gameStart = () => {
  const iter = (currentQuestion, arrayOfPairs) => {
    if (currentQuestion > countOfQuestionPairs) {
      return arrayOfPairs;
    }
    const firstNumber = generateNum(1, 100);
    const secondNmber = generateNum(1, 100);

    // Выбор случайного элемента из массива операндов
    const operand = arrayOfOpernads[Math.floor(Math.random() * arrayOfOpernads.length)];
    const question = `${firstNumber} ${operand} ${secondNmber}`;
    const rightAnswer = calculateExpression(question);
    const currentPair = cons(question, rightAnswer);
    const newCount = currentQuestion + 1;
    arrayOfPairs.push(currentPair);
    return iter(newCount, arrayOfPairs);
  };
  const arrayOfQuestionsAnswers = iter(1, []);
  sayHi(description, arrayOfQuestionsAnswers);
};

export default gameStart;
