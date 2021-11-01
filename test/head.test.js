const assertEqual = require('../assertEqual');
const head = require('../head');

assertEqual(head([5,6,7]), 5);
assertEqual(head(["Lighthouse", "Labs", "Hello"]), "Lighthouse");
assertEqual(head([]), 6);
assertEqual(head([6]), 6);
