import React from "react";
//Card BootStrap Import
import Card from 'react-bootstrap/Card';

export class BookItems extends React.Component {
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
                </Card>
            </div>
        );
    }
}