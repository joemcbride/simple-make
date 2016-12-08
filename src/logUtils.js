/* eslint no-console: 0 */
import { red } from 'chalk';
import config from './config';

export function log(...msgs) {
  console.log(...[`${config.name}`].concat(msgs));
}

export function logError(...msgs) {
  console.error(red(...[`${config.name}`].concat(msgs)));
}