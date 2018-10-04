#!/usr/bin/env node

import { cons } from 'hexlet-pairs';
import sayHi from '../engine';
import generateNum from '../generatorNum';

const description = 'Answer "yes" if number even otherwise answer "no".';

const isEvenNumber = num => num % 2 === 0;

const generatePair = () => {
  // Вернем случайное число от 1 до 20
  const question = generateNum(1, 20);
  const rightAnswer = isEvenNumber(question) ? 'yes' : 'no';
  const pair = cons(question, rightAnswer);
  return pair;
};

const gameStart = () => {
  sayHi(description, generatePair);
};

export default gameStart;
