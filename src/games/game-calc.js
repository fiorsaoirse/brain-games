#!/usr/bin/env node

import { cons } from 'hexlet-pairs';
import engineStart from '../engine';
import generateNum from '../generatorNum';

const description = 'What is the result of the expression?';
const arrayOfOpernads = ['+', '-', '*'];

const calculateExpression = (expression) => {
  const arrayOfExpression = expression.split(' ');
  const [firstNumber, operand, secondNumber] = arrayOfExpression;
  switch (operand) {
    case '+':
      return Number(firstNumber) + Number(secondNumber);
    case '-':
      return Number(firstNumber) - Number(secondNumber);
    case '*':
      return Number(firstNumber) * Number(secondNumber);
    default:
      return 'There is no such operand';
  }
};

const generateGameData = () => {
  const firstNumber = generateNum(1, 100);
  const secondNmber = generateNum(1, 100);

  // Выбор случайного элемента из массива операндов
  const operand = arrayOfOpernads[Math.floor(Math.random() * arrayOfOpernads.length)];
  const question = `${firstNumber} ${operand} ${secondNmber}`;
  const rightAnswer = calculateExpression(question);
  return cons(question, rightAnswer);
};

export default () => engineStart(description, generateGameData);
