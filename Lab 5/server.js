const express = require('express') //Import Express
const bodyParser = require('body-parser')
const app = express()
const port = 3000 //Port

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

//Can use nodemon to make it so don't need to stop node server to update changes

//http://localhost:3000/
app.get('/', (req, res) => {
    res.send('Hello World!')
})
//http://localhost:3000/datarep - creating a new url
app.get('/datarep', (req, res) => {
    res.send('Welcome to Data Representation & Querying')
})

//http://localhost:3000/hello/infoYouWantToSendBack - receiving a param from the url
app.get('/hello/:name', (req, res) => {
    res.send('Hello ' + req.params.name)
})

//http://localhost:3000/api/books - sending a json
app.get('/api/books', (req, res) => {
    const books = [
        {
            "title": "Learn Git in a Month of Lunches",
            "isbn": "1617292419",
            "pageCount": 0,
            "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/umali.jpg",
            "status": "MEAP",
            "authors": ["Rick Umali"],
            "categories": []
        },
        {
            "title": "MongoDB in Action, Second Edition",
            "isbn": "1617291609",
            "pageCount": 0,
            "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/banker2.jpg",
            "status": "MEAP",
            "authors": [
                "Kyle Banker",
                "Peter Bakkum",
                "Tim Hawkins",
                "Shaun Verch",
                "Douglas Garrett"
            ],
            "categories": []
        },
        {
            "title": "Getting MEAN with Mongo, Express, Angular, and Node",
            "isbn": "1617292036",
            "pageCount": 0,
            "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/sholmes.jpg",
            "status": "MEAP",
            "authors": ["Simon Holmes"],
            "categories": []
        }
    ]

    res.status(201).json({
        myBooks: books
    })
})

//http://localhost:3000/name - uses name from form and spits it back out to url 
app.get('/name', (req, res) => {
    res.send('Hello ' + req.query.fname + ' ' + req.query.lname)
})

app.post('/name', (req, res) => {
    console.log(req.body);
    res.send('Hello Post! ' + req.body.fname + ' ' + req.body.lname)
})

//http://localhost:3000/test - Sending a html file
app.get('/test', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

