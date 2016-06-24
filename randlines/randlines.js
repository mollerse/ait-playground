const Node = require('ait-lang/runtimes/node');
const runtime = Node();

runtime.setCanvasDimensions(1000, 1000);
runtime.evaluate(`${__dirname}/source.ait`);
runtime.writeImage(`${__dirname}/test.png`);
