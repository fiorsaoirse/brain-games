#!/usr/bin/env node

import sayHi from '..';
import gameStart from './../games/game.js';

const user = sayHi();
gameStart(user);

