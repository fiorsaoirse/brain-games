#!/usr/bin/env node

import { cons } from 'hexlet-pairs';
import sayHi from '../engine';
import generateNum from '../generatorNum';

const description = 'Find the greatest common divisor of given numbers.';

const findGCD = (firstNumber, secondNumber) => {
  if (!secondNumber) {
    return firstNumber;
  }
  return findGCD(secondNumber, firstNumber % secondNumber);
};

const generatePair = () => {
  const firstNumber = generateNum(1, 100);
  const secondNmber = generateNum(1, 100);
  const question = `${firstNumber} ${secondNmber}`;
  const rightAnswer = findGCD(firstNumber, secondNmber);
  const pair = cons(question, rightAnswer);
  return pair;
};

const gameStart = () => {
  sayHi(description, generatePair);
};

export default gameStart;
