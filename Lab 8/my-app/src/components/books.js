import React from "react";
import { BookItems } from "./bookItems";

export class Books extends React.Component {
    render() {
        
        {/*Props are also how you pass data from one component to another, as parameters*/}
        
        {/*In React, the map method is used to traverse and display a list of similar objects of a component. A map is not a feature of React. Instead, it is the standard JavaScript function that could be called on an array. The map() method creates a new array by calling a provided function on every element in the calling array.*/}
        return this.props.books.map(
            (books) => {
                return <BookItems books={books} key={books._id}></BookItems>
            }
        );
    }
}