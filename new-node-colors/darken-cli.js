var colorutil = require('./colorutil.js')

var r = process.argv[2];
var g = process.argv[3];
var b = process.argv[4];

var results = colorutil.darken(r, g, b)

console.log(results);