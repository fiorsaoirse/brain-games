#!/usr/bin/env node

import readlineSync from 'readline-sync';

const sayHi = () => {
  console.log('\nWelcome to the Brain Games!');
  console.log('Answer "yes" if number even otherwise answer "no"\n');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!\n`);
  return userName;
};

export default sayHi;
