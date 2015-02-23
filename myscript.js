
// for (var counter = 1; counter < 101; counter = counter + 1) {
//
//   // console.log(counter % 4)
//
//   if (counter % 4 == 0 && counter % 3 == 0) {
//       console.log("fizzbuzz");
//
//   } else if(counter % 4 == 0) {
//       console.log("fizz");
//
//   } else if(counter % 3 == 0) {
//     console.log("buzz");
//
//   } else{
//     console.log(counter);
//   }
// }


// console.log("After");

// var me = {
//   first_name: "Pete",
//   last_name: "Jakey"
// }
//
// console.log(me);
//
// var key = "first_name"
//
// console.log(me[key])

var sayHello = function () {
  var message = "Hello";
  message += " World";
  console.log(message);

}

var debug = function (message) {
  console.log("Debug " + message);
}

sayHello();

debug(prompt("debug message"));

var doubleNumber = function (num) {
  return num * 2;
}

debug(doubleNumber(7));
