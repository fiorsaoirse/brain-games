#!/usr/bin/env node

import { cons } from 'hexlet-pairs';
import engineStart from '../engine';
import generateNum from '../generatorNum';

const description = 'Find the greatest common divisor of given numbers.';

const findGCD = (firstNumber, secondNumber) => {
  if (!secondNumber) {
    return firstNumber;
  }
  return findGCD(secondNumber, firstNumber % secondNumber);
};

const generateGameData = () => {
  const firstNumber = generateNum(1, 100);
  const secondNmber = generateNum(1, 100);
  const question = `${firstNumber} ${secondNmber}`;
  const rightAnswer = findGCD(firstNumber, secondNmber);
  return cons(question, rightAnswer);
};

export default () => engineStart(description, generateGameData);
