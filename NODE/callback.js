// const fs = require('fs');

// fs.readFile('example.txt', 'utf-8', function(err, data) {
//   if (err) {
//     console.error('Error reading file:', err);
//     return;
//   }
//   console.log('File content:', data);
// });

//syntax
// function function_name(argument, function (callback_argument){
     //   (callback body)
     //})

     setTimeout(function () {
        console.log('This prints after 1000 ms');
     }, 1000);
     console.log("Hello World!");

     // Blocking code example for callback - nothing runs until the file is read
     var fs = require('fs')
     var data = fs.readFileSync('input.txt'); //fs.readFileSync is asynchronous method used to read a file and return its contents immediately

     console.log(data.toString());

     let i = 1;
     while  (i <= 5) {
        console.log("The number is " +i);
        i++;
     }

     //Non-blocking code example.
     //While the read operation is inporcess, Node.js asynchronously runs the subsequent loop
     var fs = require('fs');
     fs.readFile('input.txt', function (err, data){
        if (err) return console.error(err);
        console.log(data.toString());
     });

     let a = 1;
     while (a <=5) {
        console.log("The number is " + a);
        a++;
     }

     //Callback as arrow function
     var fs = require('fs');

     fs.readFile('input.txt', (err, data) => {
        if (err) return console.error(err);
        console.log(data.toString());
     });

     let j = 1;
     while (j <= 5) {
        console.log("The number is " + j);
        j++;
     }

//Upload files.
//Involves sending the files from the client to a server over HTTP. 
//The server then processes the uploaded files, stores them in a specified location
// or perform some action based on the uploaded content.
//Two main tools will be used for this 
// Express - minimal web framework for handling HTTP requests and responses.
// Multer - is a middleware that makes it easy to handle file uploads in Express
