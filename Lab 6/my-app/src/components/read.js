import React from "react";
import { Books } from "./books";
import axios from "axios";

export class Read extends React.Component {

    //Lifecycle Method
    componentDidMount() {
        //Gets json
        axios.get("http://localhost:3000/api/books")
            .then((response) => {
                //Sends data to books
                this.setState({
                    books: response.data.books
                    //Promise Response
                })
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    //State array which stores all books
    state = {
        books: []
    }

    render() {
        return (
            <div className="App">
                {/*Displays to page*/}
                <h3>Hello from Read Component</h3>
                <Books books={this.state.books}></Books>
            </div>
        );
    }
}
