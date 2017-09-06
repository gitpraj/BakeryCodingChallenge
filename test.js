import chai from 'chai';
import {divNrem, start, breakdown, calcTotal, subArrays,
          moduloWithArr, hasAZero} from '../index.js';
import readline from 'readline';
import fs from 'fs';
// var divNrem = require(./index.js).div

var assert = chai.assert;
var should = chai.should();

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



const Mocha = require('mocha');
var Test = Mocha.Test;
var Suite = Mocha.Suite;

var mocha = new Mocha();
var suite = Suite.create(mocha.suite, 'My test suite with dynamic test cases');

describe('Test Input File', function () {
    it('to check if the first word of line is a number', function() {
        var lineReader = readline.createInterface({
          input: fs.createReadStream('./input.txt')
        });.

        lineReader.on('line', function (line) {
            assert.equal(0, 1)

        });
        // lineReader.on('line', function (line) {
        //     suite.addTest(new Test(line, function () {
        //         assert.equal(4, 5);
        //         // console.log("bbbbbbbbbbbbbb")
        //         // return true;
        //     }));
        // })
        //     .on('close', function (line) {
        //         // console.log("aaaaaaaaaaaa")
        //         mocha.run();
        //         // var words = line.split(" ");
        //         // firstWords.push(words[0]);
        //     });
        //     mocha.run();
    });
});


// var rewire = require("rewire");
// var sinon = require("sinon");
// var myModule = rewire("path/to/module");
//
// describe("Test createInterface method of readline", function(err){
//   it("should be called only once", function() {
//     var readlineStub = sinon.stub();
//     myModule.__set__("readline", readlineStub);
//     myModule.convert(2016);
//     sinon.assert.calledOnce(spyCreateInterface);
//   });
// });
