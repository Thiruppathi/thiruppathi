#!/usr/bin/env node

const packageJson = require('./package.json');
const chalk = require('chalk');
const boxen = require('boxen');
const terminalLink = require('terminal-link');

const profile = {
  name: 'Thiruppathi Muthukumar',
  title: 'Full-Stack(Overflow) Developer',
  links: [
    { key: '🐦 Twitter', value: 'https://twitter.com/thiruppathi' },
    { key: '💻 Github', value: 'https://github.com/thiruppathi' },
    { key: '🌐 Website', value: 'https://thiru.xyz' },
  ],
};

console.clear(); // clears console

console.log(
  boxen(`${chalk.blue.bold(profile.name)}\n${chalk.dim(profile.title)}`, {
    padding: 1,
    borderStyle: 'round',
  })
);

profile.links.forEach((link) => {
  const linktext = terminalLink(link.key, link.value);
  console.log(linktext);
});
