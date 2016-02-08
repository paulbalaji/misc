var fs = require('fs');

// pass in the offset when calling the program
var offset = process.argv[2];

// read in data from names.txt
// put names into a list
var families = fs.readFileSync('names.txt').toString().split("\n")

// split into two lists
var right = families;
var left = right.splice(0, families.length / 2);

// generate pairs
for (j in left) {
    var x = left[j];
    var y = right[(j + offset) % right.length];
    console.log(x + " PAIRED WITH " + y);
}
