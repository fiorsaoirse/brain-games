#!/usr/bin/env node

import { cons } from 'hexlet-pairs';
import engineStart from '../engine';
import generateNum from '../generatorNum';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const sieve = (number) => {
  const arraySieve = [];
  // 0 и 1 - не простые числа
  arraySieve[0] = 0;
  arraySieve[1] = 0;
  for (let i = 2; i <= number; i += 1) {
    arraySieve[i] = 1;
  }
  for (let j = 2; j ** 2 <= number; j += 1) {
    if (arraySieve[j] === 1) {
      // Вычеркиваем индексы, кратные j
      for (let i = j ** 2; i <= number; i += j) {
        arraySieve[i] = 0;
      }
    }
  }
  return arraySieve[number] === 1;
};

const generateGameData = () => {
  const question = generateNum(1, 100);
  const rightAnswer = sieve(question) ? 'yes' : 'no';
  return cons(question, rightAnswer);
};

export default () => engineStart(description, generateGameData);
