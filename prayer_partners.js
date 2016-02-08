var fs = require('fs');

// change this every month
var offset = 1;

// read in data from names.txt
// put names into a list
var families = fs.readFileSync('names.txt').toString().split("\n")

// split into two lists
var right = families;
var left = right.splice(0, families.length / 2);

var pairs = [];
for (j in left) {
    var pair = {x: '', y: ''};
    pair.x = left[j];
    pair.y = right[(j + offset) % right.length];
    pairs[j] = pair;
}

for (pair in pairs) {
    console.log(pairs[pair].x + " PAIRED WITH " + pairs[pair].y);
}

// map numbers with names