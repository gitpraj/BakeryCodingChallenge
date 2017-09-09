import chai from 'chai';
import {divNrem, start, breakdown, calcTotal, subArrays,
          moduloWithArr, hasAZero, dispOutput} from '../index.js';
import readline from 'readline';
import fs from 'fs';

var assert = chai.assert;
var should = chai.should();
var expect = require('chai').expect;
var sinon = require('sinon');

describe('Array', function() {
  it('should start empty', function() {
    var arr = [];
    assert.equal(arr.length, 0);
  });
});

describe('divNrem module', function() {
  it('Testing divNrem module: check quotient and remainder', function() {
      var num = divNrem(10,2);
      assert.equal(num.quot, 5);
      assert.equal(num.rem, 0);
  });
});

describe('hasAZero module', function() {
  it('testing hasAZero module checking for rem 0', function() {
      var ret1 = hasAZero([{rem: 1, quot: 1}, {rem: 2, quot: 3}]);
      var ret2 = hasAZero([{rem: 1, quot: 1}, {rem: 2, quot: 3},
              {rem: 0, quot: 1}, {rem: 2, quot: 3}]);
      assert.equal(ret1, -1);
      assert.notEqual(ret2, -1);
  });
});

describe('breakdown module is the heart of the application.', function() {
  it('testing breakdown module', function() {
      var output = breakdown(11, [2,5,8]);
      // console.log(output)
      assert.equal(output.succ, 0);
      var output2 = breakdown(14, [2,5,8]);
      assert.equal(output2.succ, 1)
      var output3 = breakdown(2, [2,5,8]);
      assert.equal(output3.succ, 1)
      // This input taking 0 packs will give succ flag as 1
      var output4 = breakdown(0, [2,5,8]);
      assert.equal(output4.succ, 1);
      var output5 = breakdown(-1, [2,5,8]);
      assert.equal(output5.succ, 0)
  });
});

describe('Testing output on console', function() {
  beforeEach(function() {
    sinon.spy(console, "log");
  });

  afterEach(function(){
    console.log.restore();
  });

  it('dispOutput should produce the expected output for VS5', function() {
    dispOutput(10, [{"qnt":3,"rate":6.99},{"qnt":5,"rate":8.99}],
          [5,3], "10 VS5 10", true);
    assert.equal(console.log.callCount, 2);
    expect(console.log.calledWith("10 VS5 $17.98")).to.be.true;
    expect(console.log.calledWith("     2 x 5 $8.99")).to.be.true;
  });

  it('dispOutput should produce the expected output for MB11', function() {
    dispOutput(14, [{"qnt":2,"rate":9.95},{"qnt":5,"rate":16.95}, {"qnt":8,"rate":24.95}],
          [2,5,8], "14 MB11 10", true);
    assert.equal(console.log.callCount, 3);
    expect(console.log.calledWith("14 MB11 $54.8")).to.be.true;
    expect(console.log.calledWith("     1 x 8 $24.95")).to.be.true;
    expect(console.log.calledWith("     3 x 2 $9.95")).to.be.true;
  });

  it('dispOutput display Not a number', function() {
    dispOutput(14, [{"qnt":2,"rate":9.95},{"qnt":5,"rate":16.95}, {"qnt":8,"rate":24.95}],
          [2,5,8], "r4 MB11 10", true);
    assert.equal(console.log.callCount, 1);
    expect(console.log.calledWith("Item count is not a number.")).to.be.true;
  });

});
