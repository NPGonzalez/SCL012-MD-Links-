#!/usr/bin/env node
const argv = require('minimist')(process.argv.slice(2));
const mdLinks = require('./md-links.js');

if (require.main === module) {
  mdLinks.mdLinks(argv._.toString(), argv.validate, argv.stats)
    .then((links) => links)
    .catch((error) => error);
}

module.exports.mdLinks = mdLinks;
