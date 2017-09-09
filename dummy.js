function consoleOutput(param) {
  var newParam = param * param;
  console.log("param");
  console.log("two")
}

describe('console_output()', function() {
  it('should log the correct value to console', () => {
    // "spy" on `console.log()`
    let spy = sinon.spy(console, 'log');

    // call the function that needs to be tested
    consoleOutput(5);
  });
});


// describe('Testing output on console', function() {
//   beforeEach(function() {
//     this.cStub1 = sinon.stub(console, "info");
//         this.cStub2 = sinon.stub(console, "log");
//         this.cStub3 = sinon.stub(console, "error");
//         this.cStub4 = sinon.stub(console, "trace");
//   });
//
//   it('dispOutput should produce the expected output', function() {
//     dispOutput(10, [{"qnt":3,"rate":6.99},{"qnt":5,"rate":8.99}],
//           [5,3], "10 VS5", true);
//     assert.equal(console.log.callCount, 2);
//     expect(console.log.calledWith("10 VS5 $17.98")).to.be.true;
//     expect(console.log.calledWith("     2 x 5 $8.99")).to.be.true;
//   });
//
//   it('dispOutput should produce the expected output', function() {
//     dispOutput(14, [{"qnt":2,"rate":9.95},{"qnt":5,"rate":16.95}, {"qnt":8,"rate":24.95}],
//           [2,5,8], "14 MB11", true);
//     assert.equal(console.log.callCount, 3);
//     expect(console.log.calledWith("14 MB11 $54.8")).to.be.true;
//     expect(console.log.calledWith("     1 x 8 $24.95")).to.be.true;
//     expect(console.log.calledWith("     3 x 2 $9.95")).to.be.true;
//   });
//
//   afterEach(function(){
//         this.cStub1.restore();
//         this.cStub2.restore();
//         this.cStub3.restore();
//         this.cStub4.restore();
//     });
//
// });



// test.js
//     var sinonChai = require('sinon-chai');
//
// chai.use(sinonChai);
//
// describe('logging', function() {
//
//   beforeEach(function() {
//     sinon.spy(console, 'log');
//   });
//
//   afterEach(function() {
//     console.log.restore();
//   });
//
//   describe('logToConsole', function() {
//     it('should log to console', function() {
//       logToConsole();
//       expect(console.log).to.be.called;
//     });
//   });
//
//   describe('logToConsole2', function() {
//     it('should not log to console', function() {
//       logToConsole2();
//       expect(console.log).to.not.be.called;
//     });
//   });
// });
//
// // log.js
// function logToConsole() {
//   console.log('Hello World');
// };
//
// function logToConsole2() {
// };
