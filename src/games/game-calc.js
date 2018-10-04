#!/usr/bin/env node

import { cons } from 'hexlet-pairs';
import * as math from 'mathjs';
import sayHi from '../engine';
import generateNum from '../generatorNum';

const description = 'What is the result of the expression?';
const arrayOfOpernads = ['+', '-', '*'];

const calculateExpression = expression => math.eval(expression);

const generatePair = () => {
  const firstNumber = generateNum(1, 100);
  const secondNmber = generateNum(1, 100);

  // Выбор случайного элемента из массива операндов
  const operand = arrayOfOpernads[Math.floor(Math.random() * arrayOfOpernads.length)];
  const question = `${firstNumber} ${operand} ${secondNmber}`;
  const rightAnswer = calculateExpression(question);
  const pair = cons(question, rightAnswer);
  return pair;
};

const gameStart = () => {
  sayHi(description, generatePair);
};

export default gameStart;
