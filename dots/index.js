const fs = require('fs');

const Browser = require('ait-lang/runtimes/browser');

const runtime = Browser();
Object.assign(runtime.lexicon, require('ait-canvas'));
Object.assign(runtime.lexicon, require('ait-dom'));
Object.assign(runtime.lexicon, require('ait-animation'));

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

const canvasContainer = document.createElement('div');
document.body.appendChild(canvasContainer);
canvasContainer.innerHTML = '<div />';

function interpret(source) {
  runtime.reset();
  runtime.evaluate(source);
  const c = runtime.scope['__aitCanvasContext'].body.canvas;
  canvasContainer.replaceChild(c, canvasContainer.firstChild);
}
doEval.addEventListener('click', () => interpret(source.value));

function stopAnimations() {
  runtime.program = [{ type: 'word', body: 'stopAnimations' }];
  runtime.executeProgram();
}
stopEval.addEventListener('click', stopAnimations);
