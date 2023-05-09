'use strict';

var assert = require('assert');

const alpha = require('..');

describe('alpha', function () {
  context('smoke test', function () {
    it('add should add two numbers together', function (done) {
      assert.strictEqual(alpha.add(100,200),300);
      done();
    });
    it('subtract should subtract one number from another', function (done) {
      assert.strictEqual(alpha.subtract(100,200),-100);
      done();
    });
  });
});