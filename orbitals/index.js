const Node = require('ait-lang/runtimes/node');

const runtime = Node();
runtime.setCanvasDimensions(5000, 5000);
runtime.evaluate(`${__dirname}/orbitals.ait`);
runtime.writeImage(`${__dirname}/orbitals.png`);
