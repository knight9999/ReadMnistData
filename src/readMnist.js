

var fs = require('fs');
var zlib = require('zlib');
var gzipContent = fs.readFileSync("data/train-images-idx3-ubyte.gz");
zlib.gunzip( gzipContent, function(err,binary) {
  fs.writeFileSync("data/train-images-idx3-byte.byte");
  console.log( "length = " + binary.length );
} );
