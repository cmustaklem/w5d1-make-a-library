(function() {
    'use strict' //this makes the function more strict for finding errors IIFE, leaves no trace outside of the function

    var one = function (selector) {
        return document.querySelector(selector)
    }


    var capitalizeFirst = function(word) {
        return word.charAt(0).toUpperCase() + word.substring(1)
    }

    var capitalizeAll = function(words) {
        return words.split(' ').map(capitalizeFirst).join(' ') //join converts the array back to a string
    }
        //you can now place in default values within the argument line
    var padLeft = function(word, char = '0', length = 2) {
        // padLeft('1', '0', 2) => 01
        // char = char || '0'
        // length = length || 2
        if (word.length < length) {
            var test = char.repeat(length - word.length) + word
        }
        return test
    }

    window.dog = {
        capitalizeFirst: capitalizeFirst,
        capitalizeAll: capitalizeAll,
        padLeft: padLeft,
        //functions can go within here
        makeItRed: function() {
            document.body.style.backgoundColor = 'red'
        },
        one: one,
    }

}())








// function driveCar() {
//
// }
// //these two are the same, but they are just different ways of handling it
// var driveCar = function(doStuff, secretMessage) {
//     // console.log(callback)
//     // console.log(callback())
//     var stuffMessage = doStuff()
//     // alert(stuffMessage)
//
//     return function() {
//         return 'Hello From Your Car. ' + stuffMessage
//     }
//     //This particular function is called a closure.
// }
//
// //the callback pulls in the greeting that is listed below. The parenthesis run the code.
//
// var greeting = driveCar(function() {
//     return 'Zoom!'
// })
//
// console.log(greeting())
// var msg = greeting()
// document.body.innerHTML = greeting()
//
// //if typing an anon function, we use them for using different variables. We pass them into other functions
//
// // driveCar('Hello', 'World',1,2,3, function() {},1,true,'Ha')
//
// function makeFood() {
//
//     var lettuce = true
//
//     function makeTacos() {
//         var cheese = true
//         console.log(lettuce)
//     }
//
// }
//
//
// // if (true === true) {
// //     var city = 'Indianapolis'
// // }
