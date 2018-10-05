import { cons } from 'hexlet-pairs';
import engineStart from '../engine';
import generateNum from '../utils';

const description = 'What is the result of the expression?';
const arrayOfOpernads = ['+', '-', '*'];

const calculateExpression = (firstNumber, operand, secondNumber) => {
  switch (operand) {
    case '+':
      return firstNumber + secondNumber;
    case '-':
      return firstNumber - secondNumber;
    case '*':
      return firstNumber * secondNumber;
    default:
      return 'There is no such operand';
  }
};

const generateGameData = () => {
  const firstNumber = generateNum(1, 100);
  const secondNmber = generateNum(1, 100);

  // Выбор случайного элемента из массива операндов
  const operand = arrayOfOpernads[generateNum(0, arrayOfOpernads.length)];
  const question = `${firstNumber} ${operand} ${secondNmber}`;
  const rightAnswer = calculateExpression(firstNumber, operand, secondNmber);
  return cons(question, rightAnswer);
};

export default () => engineStart(description, generateGameData);
