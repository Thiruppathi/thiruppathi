#!/usr/bin/env node

const packageJson = require('./package.json');
const chalk = require('chalk');

const profile = {
  name: 'Thiruppathi Muthukumar',
  title: 'Full-Stack(Overflow) Developer',
  links: [
    { key: '🐦 Twitter', value: 'https://twitter.com/thiruppathi' },
    { key: '💻 Github', value: 'https://github.com/thiruppathi' },
    { key: '🌐 Website', value: 'https://thiru.xyz' },
  ],
};

console.clear(); // clear console

console.log(`
${chalk.blue.bold(profile.name)}
${chalk.dim(profile.title)}

`);

profile.links.forEach((link) => {
  console.log(`${chalk.bold(link.key)}: ${chalk.dim(link.value)}`);
});
