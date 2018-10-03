#!/usr/bin/env node

import sayHi from '..';
import gameStart from './../game.js';

const user = sayHi();
gameStart(user);
