"use strict"

var moments = require("ndarray-moments")
var cwise = require("cwise")

var do_normalize = cwise({
  args: ["array", "array", "scalar", "scalar"],
  body: function(out, a, mu, sigma) {
    out = (a - mu) / sigma
  }
})

function normalize(out, a) {
  var m = moments(2, a)
  var mean = m[0]
  var stddev = Math.sqrt(m[1] - mean*mean)
  do_normalize(out, a, mean, stddev)
  return out
}

module.exports = function normalizeWrap(a, b) {
  if(arguments.length === 1) {
    return normalize(a, a)
  } else if(arguments.length === 2) {
    return normalize(a, b)
  } else {
    throw new Error("Invalid arguments")
  }
}
