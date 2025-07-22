//import dependencies
const express = require ('express'); //for creating the server and handle the requests
const multer = require ('multer'); // for handling the file uploads
const path = require ('path'); //path to work with the file paths
const fs = require ('fs');  //for interacting with the file system

//setting up multer storage configuration
const storage = multer.diskStorage({
    destination : (req, file, cb) =>{ //destination defines where the uploaded files will be stored
        cb(null, './test'); //null means no error occurred
    },
    filename: (req, file, cb) => { //filename defines the name of the uploaded file
        // Date.now() ensures that the file name is unique by appending the current timestamp
        cb(null, Date.now() + path.extname(file.originalname)); //ext gets the file extension like ..jpg/pdf/png
    },
});

//initializing multer storage configuration
const upload = multer ({storage:storage}); // make the multer to use the custom storage
const app = express();

//creating a test folder
if(!fs.existsSync('./test')){
    fs.mkdirSync('./test');
}

//handling file uploads(POST route) when user submits it to the /upload route
app.post('/upload', upload.single('file'), (req,res) => { //upload.single tells multer to handle the single file upload from the field named file in the form
    if(!req.file) { //if the upload gets successful, the file details will be stored in the req.file
        return res.status(400).send("No file uploaded");
    }
    res.send(`File uploaded successfully: ${req.file.filename}`)
});

//Serving the upload form (GET route)
app.get('/', (req, res) =>{
    res.send(`
        <h2>File Upload Form</h2>
        <form action="/upload" method="post" enctype="multipart/form-data">
            <input type="file" name="file" required>
            <button type="submit">Upload</button>
        </form>
    `); //sends an html response to the browser with a form to upload files
    //multipart/form-data - tells the browser to send files properly(not just as text)
});

//Starting the server
const PORT = 3000;
app.listen(PORT,() => {
    console.log('Server is running on http://localhost:' + PORT);
})

// MULTIPLE FILE UPLOADS
// app.post('/upload', upload.array('files', 4), (req, res) => {
//   if (!req.files) {
//     return res.status(400).send('No files uploaded');
//   }
//   res.send(`Successfully uploaded ${req.files.length} files`);
// });