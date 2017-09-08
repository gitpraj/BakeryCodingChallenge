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
      var ret2 = hasAZero([{rem: 1, quot: 1}, {rem: 2, quot: 3}, {rem: 0, quot: 1},
              {rem: 2, quot: 3}]);
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

describe('Testing dispOutput module', function() {

  beforeEach(function() {
    this.cStub1 = sinon.stub(console, "info");
        this.cStub2 = sinon.stub(console, "log");
        this.cStub3 = sinon.stub(console, "error");
        this.cStub4 = sinon.stub(console, "trace");
  });


  it('dispOutput should produce the expected output', function() {
    dispOutput(10, [{"qnt":3,"rate":6.99},{"qnt":5,"rate":8.99}], [5,3], "10 VS5");
    assert.equal(console.log.callCount, 2);
    expect(console.log.calledWith("10 VS5 $17.98")).to.be.true;
    expect(console.log.calledWith("     2 x 5 $8.99")).to.be.true;
    // assert.equal(1,0)
    //  expect(console.log.calledWith("10 VS5 $17.98")).to.be.true;
  });

  afterEach(function(){
        this.cStub1.restore();
        this.cStub2.restore();
        this.cStub3.restore();
        this.cStub4.restore();
    });

});
//
//
//
// describe('Array', function() {
//   it('should start empty', function() {
//     var arr = [];
//     assert.equal(arr.length, 0);
//   });
// });



function privateFunction (time) {
  if (time < 12) { console.log('Good morning');console.log("prajith") }
  else if (time >= 12 && time <19) { console.log('Good afternoon'); }
  else { console.log('Good night!'); }
}

// describe('privateFunction()', function() {
//
//   beforeEach(function() {
//     this.cStub1 = sinon.stub(console, "info");
//         this.cStub2 = sinon.stub(console, "log");
//         this.cStub3 = sinon.stub(console, "error");
//         this.cStub4 = sinon.stub(console, "trace");
//   });
//
//
//   it('should log "Good morning" for hours < 12', function() {
//     privateFunction(5);
//     // expect( console.log.calledOnce ).to.be.true;
//     assert.equal(console.log.callCount, 2);
//     expect( console.log.calledWith('Good morning')).to.be.true;
//     expect( console.log.calledWith('prajith')).to.be.true;
//
//   });
//
//   afterEach(function(){
//         this.cStub1.restore();
//         this.cStub2.restore();
//         this.cStub3.restore();
//         this.cStub4.restore();
//     });
//
//
//
// });


// const sinon  = require('sinon');
// const assert = require('assert');

// the function to test
// function consoleOutput(param) {
//   var newParam = param * param;
//   console.log("param");
//   console.log("two")
// }
//
// describe('console_output()', function() {
//   it('should log the correct value to console', () => {
//     // "spy" on `console.log()`
//     let spy = sinon.spy(console, 'log');
//
//     // call the function that needs to be tested
//     consoleOutput(5);
//
//     // assert that it was called with the correct value
//     assert(spy.calledWith("param"));
//     assert(spy.calledWith("two"));
//
//     // restore the original function
//     // spy.restore();
//   });
// });
