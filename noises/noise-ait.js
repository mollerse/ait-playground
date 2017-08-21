const {
  aitFFIUnwrapValue: unwrap,
  aitFFI__F: aitF,
  aitFFIWrapValue: wrap,
  aitFFILookupVariable: lookup,
  aitFFIStoreRootVariable: store
} = require('ait-lang/ffi');

const Noise = require('noisejs').Noise;
const NOISE_GENERATOR = '__aitNoiseGenerator';

function seedNoise(seed) {
  store(this, NOISE_GENERATOR, wrap(new Noise(unwrap(seed))));
}

function simplex2(y, x) {
  const N = unwrap(lookup(this, NOISE_GENERATOR));
  return wrap(N.simplex2(unwrap(x), unwrap(y)));
}

function simplex3(z, y, x) {
  const N = unwrap(lookup(this, NOISE_GENERATOR));
  return wrap(N.simplex3(unwrap(x), unwrap(y), unwrap(z)));
}

function perlin2(y, x) {
  const N = unwrap(lookup(this, NOISE_GENERATOR));
  return wrap(N.perlin2(unwrap(x), unwrap(y)));
}

function perlin3(z, y, x) {
  const N = unwrap(lookup(this, NOISE_GENERATOR));
  return wrap(N.perlin3(unwrap(x), unwrap(y), unwrap(z)));
}

module.exports = {
  seedNoise: aitF(1, 'seedNoise', seedNoise),
  simplex2: aitF(2, 'simplex2', simplex2),
  simplex3: aitF(3, 'simplex3', simplex3),
  perlin2: aitF(2, 'perlin2', perlin2),
  perlin3: aitF(3, 'perlin3', perlin3)
};
