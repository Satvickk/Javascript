const curDate = new Date();
// console.log( curDate);            // gives date with confusing details, type is Object

// console.log( curDate.toDateString());      // => string - Sat Dec 30 2023
// console.log( curDate.toJSON());            // => string - 2023-2-30T17:25:51.553Z which is the same as curDate but in string format
// console.log( curDate.toLocaleString());    // => string - 12/30/2023, 5:25:51 PM 
// console.log( curDate.toString());          // => string - Sat Dec 30 2023 17:37:19 GMT+0000 (Coordinated Universal Time)


// console.log(Date.now());      // => gives time in milli second

// so if divided by 1000 will give time in seconds and remember to floor() it