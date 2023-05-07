'use strict';

var assert = require('assert');

const beta = require('..');

describe('beta', function () {
  context('smoke test', function () {
    it('add should add two numbers together', function (done) {
      assert.strictEqual(beta.add(100,200),300);
      done();
    });
    it('subtract should subtract one number from another', function (done) {
      assert.strictEqual(beta.subtract(100,200),-100);
      done();
    });
  });
});