import { cons } from 'hexlet-pairs';
import engineStart from '../engine';
import generateNum from '../utils';

const description = 'Answer "yes" if number even otherwise answer "no".';

const isEvenNumber = num => num % 2 === 0;

const generateGameData = () => {
  // Вернем случайное число от 1 до 20
  const question = generateNum(1, 20);
  const rightAnswer = isEvenNumber(question) ? 'yes' : 'no';
  return cons(question, rightAnswer);
};

export default () => engineStart(description, generateGameData);
