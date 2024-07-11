// 1. Printing a welcome message
function greetUser(firstName, lastName) {
    console.log(`Greetings, ${firstName} ${lastName}. Welcome to Toronto, Ontario.`)
}

// 2. Converting Celsius to Fahrenheit
function convertLbsToKgs(poundsInLbs) {
    return (poundsInLbs / 2.20462262);
}

// 3. Calculating the factorial of a number
function factorial(n) {
    if (n === 0) return 1;
    // if the input is not 0,
    return n * factorial(n - 1);
}

// 4. Making an HTTP GET request
async function fetchData(url) {
    // fetchData is defined as an async function, which allows the use of the await keyword inside it:
    const response = await fetch(url); // await will wait till a response is first received
    
    if (!response.ok) { // if the response does not have an 'ok' status code,
        throw new Error('Network response was not ok. Please try again later :/');
    }

    // Getting the content type of the response from headers
    const contentType = response.headers.get('content-type');

    // Checking if the response is in JSON format
    if (contentType && contentType.includes('application/json')) {
        return response.json();  // Parsing the JSON content of the response and returning it
    }
    
    else { 
        // Throwing an error if the response is not in JSON format
        throw new Error('Response is not in JSON format');
    } 
}

// Exporting the 4 functions above (python style):
module.exports = {
    greetUser,
    convertLbsToKgs,
    factorial,
    fetchData
};
