// Your DOM library code goes here inside of an IIFE and must set a global variables called md.
(function() {
    'use strict'

    var one = function (selector) {
        return document.querySelector(selector)
    }

    var all = function (selectorAll) {
        return document.querySelectorAll(selectorAll)
    }

    var remove = function (value) {
        return document.querySelector(value).remove()
    }

    var addClass = function (value, className) {
        return document.querySelector(value).classList.add(className)
    }

    var removeClass = function (value, className) {
        return document.querySelector(value).classList.remove(className)
    }

    var hasClass = function (selector, value) {
        return document.querySelector(selector).classList.contains(value)
    }

    var getAttr = function (selector, attribute) {
        return one(selector).getAttribute(attribute)
    }

    var setAttr = function (selector, attribute, value) {
        return one(selector).setAttribute(attribute, value)
    }

    var getHTML = function (attribute) {
        return document.querySelector(attribute).innerHTML
    }

    var setHTML = function (attribute, value) {
        return document.querySelector(attribute).innerHTML=value
    }

    var ajax = function(url, success) {
        fetch(url)
        .then(response => response.json())
        .then(success)
    }

    window.md = {
        // capitalizeFirst: capitalizeFirst,
        // capitalizeAll: capitalizeAll,
        // padLeft: padLeft,
        // //functions can go within here
        // makeItRed: function() {
        //     document.body.style.backgoundColor = 'red'
        // },
        one: one,
        all: all,
        remove: remove,
        addClass: addClass,
        removeClass: removeClass,
        hasClass: hasClass,
        getAttr: getAttr,
        setAttr: setAttr,
        getHTML: getHTML,
        setHTML: setHTML,
        ajax: ajax,
    }

}())
