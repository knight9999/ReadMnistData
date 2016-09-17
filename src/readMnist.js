
var file = "data/train-images-idx3-ubyte.gz";

var fs = require('fs');
var zlib = require('zlib');
var gzipContent = fs.readFileSync(file);
zlib.gunzip( gzipContent, function(err,binary) {
//  fs.writeFileSync("data/train-images-idx3-byte.byte");
  console.log( "length = " + binary.length );
  var header = readTrainingImageHeader(binary);
  console.log( JSON.stringify( header ) );


  var showData = function (num) {

    var buf = readTrainingImages(num,binary,header);
    var arr = printImage(buf,header);
    for (var i=0;i<arr.length;i++) {
      var line = arr[i].map( function(x) {
        if (x<128) {
          return " ";
        } else if (x<172) {
          return "+";
        } else {
          return "*";
        }
      }).join("");
      console.log( line  );
    }
  }

  showData(0);

  showData(1);

  showData(2);

  showData(3);


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

function readTrainingImages(number,binary,header) {
  if (header == null) {
    header = readTrainingImageHeader(binary);
  }
  var size = header.number_of_rows * header.number_of_columns;
  return binary.slice( 16 + number * size , 16 + (number + 1 ) * size );
}

function printImage(binary,header) {
  var image = [];
  for (var y = 0; y<header.number_of_rows; y++ ) {
    var list = [];
    for (var x = 0; x<header.number_of_columns; x++ ) {
      list[x] = binary[y*header.number_of_columns+x];
    }
    image[y] = list;
  }
  return image;
}
