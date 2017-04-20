const fs = require('fs');
const Node = require('ait-lang/runtimes/node');

const runtime = Node(__dirname);
runtime.load(require('ait-canvas'));

runtime.setCanvasDimensions(1680, 1050);
runtime.evaluate(fs.readFileSync(`${__dirname}/source.ait`).toString());
runtime.writeImage(`${__dirname}/test.png`);
