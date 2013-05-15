var moments = require("ndarray-moments")
var lena = require("luminance")(require("lena"))

console.log("Before normalization:", moments(2, lena))

require("../normalize")(lena)

console.log("After normalization:", moments(2, lena))