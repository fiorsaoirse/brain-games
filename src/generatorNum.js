#!/usr/bin/env node

export default (min, max) => Math.floor(Math.random() * (max - min)) + min;
