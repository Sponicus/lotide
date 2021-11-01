const assertEqual = require('../assertEqual');
assertEqual(1,1);
assertEqual(1-4,-3);
assertEqual(-5,-5);
assertEqual(9*2,18);
assertEqual(1-3+2+1,1);
assertEqual(1253,1253);

module.exports = assertEqual;