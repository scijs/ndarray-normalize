ndarray-normalize
=================
Normalizes an ndarray so that the mean is 0 and the standard deviation is 1.

## Example

```javascript
var moments = require("ndarray-moments")
var lena = require("luminance")(require("lena"))

console.log("Before normalization:", moments(2, lena))

require("ndarray-normalize")(lena)

console.log("After normalization:", moments(2, lena))
```

This prints out:

    Before normalization: [ 124.04670674515125, 17677.59913617722 ]
    After normalization: [ -7.130396703039932e-14, 1.0000000000002789 ]

## Install

    npm install ndarray-normalize

### `require("ndarray-normalize")(output, input)`
Normalizes an ndarray

* `output` gets the result
* `input` is the array that gets normalized (if unspecified, output is normalized in place)

**Returns** `output`

## Credits
(c) 2013 Mikola Lysenko. MIT License