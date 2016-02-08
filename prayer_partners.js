var fs = require('fs');

/*
   OLD VERSION:
    - pass in the offset when calling the program, default 0
    - var offset = process.argv.length > 2 ? process.argv[2] : 0;
*/

// read in data from names.txt
// put names into a list
var families = fs.readFileSync('names.txt').toString().split("\n")

// split into two lists
var right = families;
var left = right.splice(0, families.length / 2);


var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August',
              'September', 'October', 'November', 'December'];

for (month in months) {
    console.log("ROTA FOR " + months[month] + ":");
    generatePairs(month);
    console.log("\n\n");
}

function generatePairs(offset) {
    for (j in left) {
        var x = left[j];
        var y = right[(j + offset) % right.length];
        console.log(x + " PAIRED WITH " + y);
    }
}