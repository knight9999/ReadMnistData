

var fs = require('fs');
var zlib = require('zlib');
var gzipContent = fs.readFileSync("data/train-images-idx3-ubyte.gz");
zlib.gunzip( gzipContent, function(err,binary) {
//  fs.writeFileSync("data/train-images-idx3-byte.byte");
  console.log( "length = " + binary.length );
  var header = readTrainingImageHeader(binary);
  console.log( JSON.stringify( header ) );
} );


function readTrainingImageHeader(binary) {
  var magic_number = binary.readInt32BE(0);
  var number_of_images = binary.readInt32BE(4);
  var number_of_rows = binary.readInt32BE(8);
  var number_of_columns = binary.readInt32BE(12);

  return { magic_number : magic_number ,
          number_of_images : number_of_images ,
          number_of_rows : number_of_rows ,
          number_of_columns : number_of_columns };
}
