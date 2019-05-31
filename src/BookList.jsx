import React, {Component} from 'react';
import Book from './Book';
import './BookList.css';

class BookList extends Component {

    static defaultProps = {
        book : [
          {  title: "C-language",
        price: 130},
        {  title: "Data Structures",
        price: 130},
        {  title: "Java Programing",
        price: 130}
        ]
    }


    render() {
        return (
            <div className="BookList">
                {this.props.book.map(b =>  <Book title={b.title} price={b.price} />)}
            </div>
        )
    }
}

export default BookList;