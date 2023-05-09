"use strict";

var assert = require('assert');

const beta = require('..');

describe('beta', function () {
  context('smoke test', function () {
    it('should add first two numbers and subtract the third', function (done) {
      const a = 100, b = 200, c = 50;
      const expected = a + b - c;
      assert.strictEqual(beta( a, b, c ), expected );
      done();
    });
  });
})