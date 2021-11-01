# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @sponicus/lotide`

**Require it:**

`const _ = require('@sponicus/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertArraysEquals(...)`: test if two arrays are equal
* `assertEqual(...)`: test if two values are equal
* `assertObjectsEqual(...)`: check if two objects are equal
* `countLetters(...)`: counts letters in word or phrase
* `eqArrays(...)`: check if two arrays are equal
* `eqObjects(...)`: check if two objects are equal
* `findKey(...)`: find key in objects
* `findKeyByValue(...)`: find key in object by value
* `head(...)`: find the first item in an array
* `letterPositions(...)`: find the position of a letter in a string
* `map(...)`: find the first index of an array of strings
* `middle(...)`: find the middle items of an array
* `reverse(...)`: reverse a string
* `tail(...)`: find all elements after the first index
* `takeUntil(...)`: return all elements until a desired index
* `without(...)`: return array without indicated elements