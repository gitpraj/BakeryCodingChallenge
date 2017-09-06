/* Class pack
    This class is for creating a pack with the quantity and the rate for it.
    variables:
        qnt: quantity of the product
        rate: rate of the pack of qnt
*/

var pack = class pack {
  constructor(qnt, rate) {
    this.qnt = qnt;
    this.rate = rate;
  }
};


/* breakdown(): function where the actual breakdown of items happen according
    to the input. This is in a way where the item count should be as small as
    possible.
    arguments:
        number: actual input
        arr: array consists of different packs cnt for a product
*/
function breakdown(number, arr) {
    var flag = 0;
    arr.sort();
    arr.reverse();
    var ret;
    var temp_arr = arr.slice(0);
    while (temp_arr.length > 0) {
        ret = subArrays(number, temp_arr);
        if (ret.ret != -1) {
          // success
          flag = 1;
          break;
        } else {
          // fail
          temp_arr.splice(0, 1);
        }
    }

    return {
      succ: flag,
      resArr: ret.resArr,
      pack: ret.val
    }
}

/* subArrays(): function where the array is being parsed element by element,
    forming sub arrays and then redo the process for breakdown.
    arguments:
        number: actual input
        arr: array consists of different packs cnt for a product
*/
function subArrays(number, arr) {
    /* first sort the array in desc */
    var resArr = [];
    var ptr, end, first = [];
    var ret;
    end = arr.length - 1;
    ptr = 0;
    var temp_arr = arr.slice(0);
    first.push(arr[0]);
      while ((ptr <= end)) {
          ptr++;
          // jump to the next element and call moduloWithArr again.
          var splicedArr = temp_arr.slice(ptr,end + 1);
          var newArr = first.concat(splicedArr);
          //console.log("new Arr: " + newArr)
          resArr = moduloWithArr(number, newArr, []);
          //console.log("resArr: " + JSON.stringify(resArr))
          ret = hasAZero(resArr);
          if (ret >= 0) {
            break;
          } else {

          }
      }

      //console.log("ret subarrays: " +ret)
      return {
        ret: ret,
        resArr: resArr,
        val: newArr
      }
}

/* hasAZero(): function where the array is being checked for remainders being 0.
    arguments:
        array: array of objects having quotient and remainders.
*/
function hasAZero(array) {
    var flag = 0;

    for(var i = 0; i < array.length; ++i) {
      if(array[i].rem == 0) {
        flag = 1;
        break;
      }
    }

    if(flag) {
      return i;
    } else {
      return -1;
    }
}

/* divNrem(): function to divide and return the quotient and remainder
*/
let divNrem = function(dividend, divisor) {
  var quot = Math.floor(dividend / divisor);
  var rem = dividend % divisor;

  return {quot: quot,
          rem: rem}
}

/* moduloWithArr(): function where the input is first being divided by the
    maximum number in the array and then the remainder is divided by the next
    number and goes until the end of the array.
    arguments:
        number: actual input
        arr: array consists of different packs for a product
        resArr: this array is first empty and will be filled with remainder
                and quotient of every division done.
*/
function moduloWithArr(number, arr, resArr) {
    var tempArr = arr.slice(0);
    var quot = -1;
    var rem = -1;
    var max = Math.max(...tempArr);
    var index = tempArr.indexOf(max);
    var ans = divNrem(number, max);
    quot = ans.quot;
    rem = ans.rem;
    if (index > -1) {
      tempArr.splice(index, 1);
    }
    resArr.push({rem: rem, quot: quot});
    return ((tempArr.length > 0) && (rem != 0)) ? moduloWithArr(rem, tempArr, resArr) : resArr;
}

/* calcTotal(): function to calculate the rates after beakdown.
*/
function calcTotal (resArr, resPack, packs) {
  var tot_price = 0;
  for (var j = 0; j < resArr.length; j++) {
      for (var k = 0; k < packs.length; k++) {
        if (packs[k].qnt == resPack[j]) {
          var count = resArr[j].quot;
          ////console.log("count: " + count)
          var price = count * packs[k].rate;
          ////console.log("price: " + price)
          tot_price += price;
        }
      }
  }
  return tot_price;
}

/* dispOutput(): function where the rates are displayed on the console.
*/
function dispOutput(number, arr_pack, arr_pack_qnt, item_input) {
    var output = breakdown(number, arr_pack_qnt);
    //console.log("output ret: ", output)
    if (output.succ != 0) {
        var tot_price = calcTotal(output.resArr, output.pack, arr_pack);
        tot_price = Math.round(tot_price * 100) / 100
    } else {
        tot_price = 0;
        output.resArr = [];
    }
        /* Outout on to the ////console */
        console.log(item_input + " $" + tot_price);
        for (var j = 0; j < output.resArr.length; j++) {
          for (var k = 0; k < arr_pack.length; k++) {
            if (arr_pack[k].qnt == output.pack[j]) {
              console.log("     " + output.resArr[j].quot + " x " + output.pack[j] + " $" + arr_pack[k].rate);
            }
          }
        }
}

/* start(): function where the application starts
*/
function start() {
  /* Creating packs for Vegemite Scroll */
  const pack1_vs5 = new pack(3, 6.99);
  const pack2_vs5 = new pack(5, 8.99);

  var arr_pack_vs5 =  [pack1_vs5, pack2_vs5];
  var arr_pack_qnt_vs5 = [pack1_vs5.qnt, pack2_vs5.qnt];

  /* Creating packs for Blueberry Muffin */
  const pack1_mb11 = new pack(2, 9.95);
  const pack2_mb11 = new pack(5, 16.95);
  const pack3_mb11 = new pack(8, 24.95);

  var arr_pack_mb11 =  [pack1_mb11, pack2_mb11, pack3_mb11];
  var arr_pack_qnt_mb11 = [pack1_mb11.qnt, pack2_mb11.qnt, pack3_mb11.qnt];

  /* Creating packs for Croissant */
  const pack1_cf = new pack(3, 5.95);
  const pack2_cf = new pack(5, 9.95);
  const pack3_cf = new pack(9, 16.99);

  var arr_pack_cf =  [pack1_cf, pack2_cf, pack3_cf];
  var arr_pack_qnt_cf = [pack1_cf.qnt, pack2_cf.qnt, pack3_cf.qnt];

  var lineReader = require('readline').createInterface({
    input: require('fs').createReadStream('./input.txt')
  });

  lineReader.on('line', function (line) {
      var firstWords = [];
      var item;
      var words = line.split(" ");
      firstWords.push(words[0]);
      var number = Number(firstWords);
      if (isNaN(number) == false) {
        item = words[1];
        switch(item) {
          case 'MB11':
          case 'mb11':
              dispOutput(number, arr_pack_mb11, arr_pack_qnt_mb11, line);
              break;
          case 'CF':
          case 'cf':
              dispOutput(number, arr_pack_cf, arr_pack_qnt_cf, line);
              break;
          case 'VS5':
          case 'vs5':
              dispOutput(number, arr_pack_vs5, arr_pack_qnt_vs5, line);
              break;
          default:
              break;
        }
      } else {
        //console.log("Not a number");
      }
  });
  return "";
}

module.exports = {
  divNrem,
  start,
  breakdown,
  calcTotal,
  subArrays,
  moduloWithArr,
  hasAZero
}

/* To run exported functions directly from the command line
*/
require('make-runnable/custom') ({
    printOutputFrame: false
})
