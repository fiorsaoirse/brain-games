import { cons } from 'hexlet-pairs';
import engineStart from '../engine';
import generateNum from '../utils';

const description = 'What number is missing in this progression?';
const countOfElements = 10;

const generateProgression = (firstElem, step) => {
  const arrayOfNumbers = [];
  for (let i = 0; i < countOfElements - 1; i += 1) {
    const newElement = firstElem + step * i;
    arrayOfNumbers.push(newElement);
  }
  return arrayOfNumbers;
};

const generateGameData = () => {
  // Генерация шага для прогрессии
  const step = generateNum(1, 10);
  const firstNumber = generateNum(1, 100);
  const progression = generateProgression(firstNumber, step);

  // Получаем случайный индекс из массива, элемент с этим индексом "спрячем"
  const hiddenElemIndex = generateNum(0, progression.length - 1);
  const rightAnswer = progression[hiddenElemIndex];

  // "Прячем" элемент
  progression[hiddenElemIndex] = '...';
  const question = progression.join(' ');
  return cons(question, rightAnswer);
};

export default () => engineStart(description, generateGameData);
