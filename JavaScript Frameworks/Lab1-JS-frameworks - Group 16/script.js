// Importing the filesytem module to eventually read a text file
const fileSystem = require('fs');


// Calling the read function from the imported node.js fileSystem module
fileSystem.readFile('readme.md', 'utf-8', function(err, data) {
    // Log errors in case reading the local file fails
    if (err) {
        return console.log(err);
    }
     
    // Log a success message if no errors were encountered...
    else {
        console.log("Execution has completed successfully...");
    }

    // Log the data from the readme in all cases
    console.log(data);
}
);