#!/usr/bin/env node

import readlineSync from 'readline-sync';

const sayHi = () => {
const userName = readlineSync.question('May I have your name? ');
console.log('Hello, ' + userName + '!');
}

export sayHi;