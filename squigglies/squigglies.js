const fs = require('fs');
const Node = require('ait-lang/runtimes/node');

const runtime = Node(__dirname);

runtime.setCanvasDimensions(500, 500);
runtime.evaluate(fs.readFileSync(`${__dirname}/source.ait`).toString());
runtime.writeImage(`${__dirname}/test.png`);
