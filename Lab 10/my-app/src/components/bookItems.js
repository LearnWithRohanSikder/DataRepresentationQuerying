import React from "react";
//Card BootStrap Import
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import axios from "axios";

export class BookItems extends React.Component {

    constructor() {
        super(); 
        //Binds for the deletebook method
        this.DeleteBook = this.DeleteBook.bind(this); 
    }

    //Calls the delete with the books id
    DeleteBook(e) {
        e.preventDefault();
        axios.delete('http://localhost:3000/api/book/' + this.props.books._id) 
            .then((res) => { this.props.Reload(); }) 
            .catch();
    }

    render() {
        return (
            <div className="App">
                <Card>
                    <Card.Body>
                        {/*Using props of books to display individual Books in the React Bootstrap Card*/}
                        <Card.Title>{this.props.books.title}</Card.Title>
                        <Card.Title>{this.props.books.cover}</Card.Title>
                        <Card.Title>{this.props.books.author}</Card.Title>
                        {/* <Card.Subtitle className="mb-2 text-muted">{this.props.books.authors}</Card.Subtitle>
                        <Card.Text><img src={this.props.books.thumbnailUrl}></img></Card.Text> */}
                    </Card.Body>
                        <Link to={'/edit/'+this.props.books._id} className="btn btn-primary">Edit</Link>
                        {/* Deletes Book and reloads page */}
                        <Button variant="danger" onClick={this.DeleteBook}>Delete</Button>
                </Card>
            </div>
        );
    }
}