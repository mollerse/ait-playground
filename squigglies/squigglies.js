const Node = require('ait-lang/runtimes/node');

const runtime = Node();

runtime.setCanvasDimensions(500, 500);
runtime.evaluate(`${__dirname}/source.ait`);
runtime.writeImage(`${__dirname}/test.png`);
