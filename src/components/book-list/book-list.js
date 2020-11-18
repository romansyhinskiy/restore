import React, {Component} from 'react'
import BookListItem from "../book-list-item";
import {connect} from "react-redux";
import withBookstoreService from "../hoc/with-bookstore-service";
import {booksLoaded, booksRequested} from '../../actions/index'
import './book-list.css'
import Spinner from '../spinner/spinner'

class BookList extends Component {

    componentDidMount() {
        //    receive data

        const { bookstoreService, booksLoaded, booksRequested } = this.props;
        booksRequested()
        bookstoreService.getBooks()
            .then((data) =>{booksLoaded(data)})
    }

    render() {
        const {books} = this.props;
        if(this.props.loading){
            return <Spinner />
        }
        return (
            <ul className='book-list'>
                {
                    books.map(book => {
                        return (
                            <li key={book.id}><BookListItem book={book}/></li>
                        )
                    })
                }
            </ul>
        )
    }
}

const mapStateToProps = ({books, loading}) => {
    return {books, loading}
}
const mapDispatchToProps = {
    booksLoaded, booksRequested
}
export default withBookstoreService()(connect(mapStateToProps, mapDispatchToProps)(BookList))