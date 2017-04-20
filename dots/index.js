const fs = require('fs');

const Browser = require('ait-lang/runtimes/browser');

const runtime = Browser();
runtime.load(require('ait-canvas'));
runtime.load(require('ait-dom'));
runtime.setCanvasDimensions(500, 500);

const source = document.createElement('textarea');
source.setAttribute('rows', 50);
source.setAttribute('cols', 80);
source.value = fs.readFileSync(__dirname + '/source.ait');
document.body.appendChild(source);

const doEval = document.createElement('button');
doEval.textContent = 'Evaluate';
document.body.appendChild(doEval);

const stopEval = document.createElement('button');
stopEval.textContent = 'Stop';
document.body.appendChild(stopEval);

document.body.appendChild(runtime.ctx.canvas);

function interpret(source) {
  runtime.reset();
  runtime.evaluate(source);
}

doEval.addEventListener('click', () => interpret(source.value));
stopEval.addEventListener('click', () => runtime.stopAnimations());