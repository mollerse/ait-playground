const fs = require('fs');

const Browser = require('ait-lang/runtimes/browser');
const src = fs.readFileSync(__dirname + '/source.ait', 'utf8');

document.body.style.margin = 0;
document.body.style.padding = 0;
document.body.style.overflow = 'hidden';

const runtime = Browser();
runtime.load(require('ait-canvas'));
runtime.load(require('ait-dom'));

runtime.setCanvasDimensions(window.innerWidth, window.innerHeight);

runtime.reset();
runtime.evaluate(src);

document.body.appendChild(runtime.ctx.canvas);

runtime.ctx.canvas.addEventListener('click', () => runtime.stopAnimations());
