import React, {Component} from 'react';
import './Book.css'

class Book extends Component {
    render() {
        return (
            <div className="Book">
                <h1>{this.props.title}</h1>
                <p>Price:{this.props.price}</p>
            </div>
        )
    }
}

export default Book;