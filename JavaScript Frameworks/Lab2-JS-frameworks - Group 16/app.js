// Importing the utilities file which has the functions via ESS module:
const utils = require('./utilities.js');

// Just logging the file content for debugging:
// console.log(utils);

utils.greetUser("Ruben", "Neves"); // No need to log this because the function makes the log.

console.log(`The result is ${utils.convertLbsToKgs(150)}`); // This should be 68 something in the logs.

console.log(`The result is ${utils.factorial(5)}`); // Should be 120

const url = 'https://api.github.com/emojis'; // Storing the url as a const variable
// Fetching data from the specified URL using the fetchData function
utils.fetchData(url)
    .then(data => {
        // Storing and logging the first 5 fetched emojis (through GitHub's APIs) since the list is huge
        const firstFiveEmojis = Object.entries(data).slice(0, 5);
        console.log(firstFiveEmojis);
    })
    .catch(error => {
        // Handling errors if any occurred during the fetch operation
        console.error('An error occurred while fetching data:', error);
    });
