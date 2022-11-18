import React from "react";
import axios from "axios";

export class Create extends React.Component {

    constructor() {
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
        this.onChangeBookTitle = this.onChangeBookTitle.bind(this);
        this.onChangeCover = this.onChangeCover.bind(this);
        this.onChangeAuthor = this.onChangeAuthor.bind(this);
        this.state = {
            title: '',
            cover: '',
            author: ''
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        console.log(`${this.state.title}, ${this.state.cover} , ${this.state.author}`);
        
        //Takes title,cover,author from json and puts into state
        const books = {
            title:this.state.title,
            cover:this.state.cover,
            author:this.state.author
        }
        
        // Takes response and puts it into books.
        axios.post('http://localhost:3000/api/books', books)
        .then()
        .catch();

        this.setState({
            title: '',
            cover: '',
            author: ''
        })

    }
    

    onChangeBookTitle(e) {
        this.setState({
            title: e.target.value
        })
    }

    onChangeCover(e) {
        this.setState({
            cover: e.target.value
        })
    }

    onChangeAuthor(e) {
        this.setState({
            author: e.target.value
        })
    }

    render() {
        return (
            <div>
                <h3> Hello from create component </h3>
                {/*React Forms*/}
                <form onSubmit={this.handleSubmit}>

                    <div className="form-group">
                        <label>Add Book Title: </label>
                        <input type="text" className="form-control" value={this.state.title} onChange={this.onChangeBookTitle} />
                    </div>

                    <div className="form-group">
                        <label>Add Book Cover: </label>
                        <input type="text" className="form-control" value={this.state.cover} onChange={this.onChangeCover} />
                    </div>

                    <div className="form-group">
                        <label>Add Author: </label>
                        <input type="text" className="form-control" value={this.state.author} onChange={this.onChangeAuthor} />
                    </div>

                    <input type="submit" value="Submit" />
                </form>
            </div>
        );
    }
}