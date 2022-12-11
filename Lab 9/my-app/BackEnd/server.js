//npm install body-parser
//npm install express
//npm install cors

const express = require('express') //Import Express
const bodyParser = require('body-parser')
const app = express()
const port = 3000 //Port

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

// avoid a CORS error
const cors = require('cors');
app.use(cors());
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

// getting-started.js
const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
    //Connect to our mongodb database
    await mongoose.connect('mongodb+srv://admin:admin@cluster0.rhqvnnf.mongodb.net/?retryWrites=true&w=majority');
}

//Format which data will be in
const bookSchema = new mongoose.Schema({
    title: String,
    author: String,
    cover: String
});

const bookModel = mongoose.model('AllBooks', bookSchema);

//Can use nodemon to make it so don't need to stop node server to update changes

//Post request to get title, cover, author
app.post('/api/books', (req, res) => {
    console.log(req.body); 

    bookModel.create({
        title: req.body.title,
        cover: req.body.cover,
        author: req.body.author
    })
    res.send('Data Recieved');
})

//Gets all json data from /api/books
app.get('/api/books', (req, res) => {
    bookModel.find((error, data) => {
        res.json(data);
    })
})

//Gets particular json data from /api/books @ :id
app.get('/api/book/:id', (req, res) =>{
    console.log(req.params.id);
    //The findById() function is used to find a single document by its _id field
    bookModel.findById(req.params.id, (error, data) => {
        res.json(data);
    })
})

//Delete request comes in from /api/book/:id and then bookModel finds it and updates it and sends new data
app.put('/api/book/:id',(req,res) =>{
    console.log("Update: " + req.params.id);
    //The findByIdAndUpdate() function is used to find a matching document, updates it according to the update arg, passing any options, and returns the found document (if any) to the callback
    bookModel.findByIdAndUpdate(req.params.id, req.body, {new:true},
        (error,data)=>{
            res.send(data);
        })
})

//Put request comes in from /api/book/:id and then bookModel finds it and updates it and sends new data
app.delete('/api/book/:id', (req,res) => {
    console.log('Deleting: ' + req.params.id); 
    //The findByIdAndDelete() function is used to find a matching document, removes it, and passing the found document
    bookModel.findByIdAndDelete({_id:req.params.id}, (error,data)=>{ 
        res.send(data);
    }) 
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})